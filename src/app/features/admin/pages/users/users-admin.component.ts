import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { AdminAuthService } from '../../services/admin-auth.service';

interface UserRow {
  id:        number;
  name:      string;
  email:     string;
  role:      'admin' | 'ventas' | 'seo';
  isActive:  boolean;
  createdAt: string;
}

type ModalMode = 'create' | 'edit' | 'password' | null;

@Component({
  selector: 'app-users-admin',
  standalone: false,
  templateUrl: './users-admin.component.html',
  styleUrl:    './users-admin.component.css',
})
export class UsersAdminComponent implements OnInit {

  users: UserRow[] = [];
  loading = true;

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode: ModalMode = null;
  selectedUser: UserRow | null = null;

  userForm!: FormGroup;
  passwordForm!: FormGroup;

  saving  = false;
  error   = '';
  success = '';

  readonly roles = [
    { value: 'admin',  label: 'Admin'  },
    { value: 'ventas', label: 'Ventas' },
    { value: 'seo',    label: 'SEO'    },
  ];

  constructor(
    private readonly api: AdminApiService,
    readonly auth: AdminAuthService,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildForms();
    this.loadUsers();
  }

  // ── Carga ─────────────────────────────────────────────────────────────────

  loadUsers(): void {
    this.loading = true;
    this.api.getUsers().subscribe({
      next:  (list) => { this.users = list; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  // ── Formularios ───────────────────────────────────────────────────────────

  private buildForms(): void {
    this.userForm = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      role:     ['ventas', Validators.required],
    });

    this.passwordForm = this.fb.group({
      newPassword:     ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  // ── Abrir modales ─────────────────────────────────────────────────────────

  openCreate(): void {
    this.selectedUser = null;
    this.modalMode = 'create';
    this.error = '';
    this.userForm.reset({ role: 'ventas' });
    this.userForm.get('password')!.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get('password')!.updateValueAndValidity();
  }

  openEdit(user: UserRow): void {
    this.selectedUser = user;
    this.modalMode = 'edit';
    this.error = '';
    this.userForm.patchValue({ name: user.name, email: user.email, role: user.role });
    this.userForm.get('password')!.clearValidators();
    this.userForm.get('password')!.updateValueAndValidity();
  }

  openChangePassword(user: UserRow): void {
    this.selectedUser = user;
    this.modalMode = 'password';
    this.error = '';
    this.passwordForm.reset();
  }

  closeModal(): void {
    this.modalMode = null;
    this.selectedUser = null;
    this.error = '';
    this.saving = false;
  }

  // ── Guardar ───────────────────────────────────────────────────────────────

  save(): void {
    if (this.userForm.invalid) { this.userForm.markAllAsTouched(); return; }
    this.saving = true;
    this.error  = '';

    if (this.modalMode === 'create') {
      const { name, email, password, role } = this.userForm.value;
      this.api.createUser({ name, email, password, role }).subscribe({
        next: () => { this.saving = false; this.closeModal(); this.loadUsers(); },
        error: (err) => { this.saving = false; this.error = err?.error?.message ?? 'Error al crear usuario'; },
      });
    } else if (this.modalMode === 'edit' && this.selectedUser) {
      const { name, email, role } = this.userForm.value;
      this.api.updateUser(this.selectedUser.id, { name, email, role }).subscribe({
        next: () => { this.saving = false; this.closeModal(); this.loadUsers(); },
        error: (err) => { this.saving = false; this.error = err?.error?.message ?? 'Error al actualizar usuario'; },
      });
    }
  }

  savePassword(): void {
    if (this.passwordForm.invalid) { this.passwordForm.markAllAsTouched(); return; }
    const { newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }
    this.saving = true;
    this.error  = '';
    this.api.changeUserPassword(this.selectedUser!.id, newPassword).subscribe({
      next:  () => { this.saving = false; this.closeModal(); },
      error: (err) => { this.saving = false; this.error = err?.error?.message ?? 'Error al cambiar contraseña'; },
    });
  }

  // ── Acciones rápidas ──────────────────────────────────────────────────────

  toggleActive(user: UserRow): void {
    this.api.toggleUser(user.id).subscribe({
      next: (updated) => { user.isActive = updated.isActive; },
    });
  }

  deleteUser(user: UserRow): void {
    if (!confirm(`¿Eliminar al usuario "${user.name}"? Esta acción no se puede deshacer.`)) return;
    this.api.deleteUser(user.id).subscribe({
      next: () => { this.users = this.users.filter(u => u.id !== user.id); },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  isOwnAccount(user: UserRow): boolean {
    return this.auth.getCurrentUser()?.id === user.id;
  }

  formatDate(iso: string): string {
    const d = new Date(iso);
    return `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`;
  }

  isFieldInvalid(form: FormGroup, field: string): boolean {
    const ctrl = form.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  trackById(_: number, u: UserRow): number { return u.id; }
}
