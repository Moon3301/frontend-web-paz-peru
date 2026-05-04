import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';
import { environment } from '../../../../../environments/environments';

export interface FileNode {
  name: string;
  path: string;
  type: 'folder' | 'file';
  url?: string;
  mimeType?: string;
  sizeBytes?: number;
  children?: FileNode[];
  _open?: boolean; // estado UI del árbol
}

@Component({
  selector: 'app-admin-media-manager',
  standalone: false,
  templateUrl: './media-manager.component.html',
  styleUrl: './media-manager.component.css',
})
export class MediaManagerComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  tree: FileNode[] = [];
  loading = true;
  uploading = false;
  uploadProgress = 0;

  /** Carpeta actualmente seleccionada en el árbol */
  selectedFolder = '';

  /** Archivos/carpetas del directorio actual */
  currentFiles: FileNode[] = [];

  /** Ruta mostrada como breadcrumb */
  breadcrumb: string[] = [];

  /** Para nueva carpeta */
  showNewFolder = false;
  newFolderName = '';

  /** Feedback */
  toastMsg = '';
  toastType: 'ok' | 'err' = 'ok';

  /** Para confirmar eliminación */
  confirmDeletePath: string | null = null;

  /** URL base para servir archivos */
  readonly uploadsUrl = environment.uploadsUrl;

  constructor(private readonly api: AdminApiService) {}

  ngOnInit(): void { this.loadTree(); }

  loadTree(): void {
    this.loading = true;
    this.api.listMediaFiles().subscribe({
      next: (tree) => {
        this.tree = tree;
        this.loading = false;
        // Mostrar raíz al inicio
        this.openFolder('', this.tree);
      },
      error: () => { this.loading = false; },
    });
  }

  // ── Navegación en árbol ────────────────────────────────────────────────────

  openFolder(path: string, nodes: FileNode[]): void {
    this.selectedFolder = path;
    this.currentFiles = nodes;
    this.breadcrumb = path ? path.split('/') : [];
  }

  navigateToNode(node: FileNode): void {
    if (node.type === 'folder') {
      node._open = !node._open;
      this.openFolder(node.path, node.children ?? []);
    }
  }

  navigateBreadcrumb(index: number): void {
    if (index < 0) {
      this.openFolder('', this.tree);
      return;
    }
    const path = this.breadcrumb.slice(0, index + 1).join('/');
    const node = this.findNode(this.tree, path);
    if (node?.children) this.openFolder(path, node.children);
  }

  private findNode(nodes: FileNode[], path: string): FileNode | undefined {
    for (const n of nodes) {
      if (n.path === path) return n;
      if (n.children) {
        const found = this.findNode(n.children, path);
        if (found) return found;
      }
    }
    return undefined;
  }

  // ── Subir archivos ─────────────────────────────────────────────────────────

  triggerUpload(): void {
    this.fileInput.nativeElement.value = '';
    this.fileInput.nativeElement.click();
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    if (!files.length) return;

    this.uploading = true;
    let done = 0;
    files.forEach(file => {
      this.api.uploadToFolder(file, this.selectedFolder).subscribe({
        next: () => {
          done++;
          this.uploadProgress = Math.round((done / files.length) * 100);
          if (done === files.length) this.afterUpload();
        },
        error: () => {
          done++;
          if (done === files.length) this.afterUpload();
          this.showToast('Error al subir ' + file.name, 'err');
        },
      });
    });
  }

  private afterUpload(): void {
    this.uploading = false;
    this.uploadProgress = 0;
    this.showToast('Archivos subidos correctamente', 'ok');
    this.loadTree();
  }

  // ── Nueva carpeta ──────────────────────────────────────────────────────────

  createFolder(): void {
    if (!this.newFolderName.trim()) return;
    const path = this.selectedFolder
      ? `${this.selectedFolder}/${this.newFolderName.trim()}`
      : this.newFolderName.trim();
    this.api.createMediaFolder(path).subscribe({
      next: () => {
        this.showNewFolder = false;
        this.newFolderName = '';
        this.showToast('Carpeta creada', 'ok');
        this.loadTree();
      },
      error: () => this.showToast('No se pudo crear la carpeta', 'err'),
    });
  }

  // ── Eliminar archivo ──────────────────────────────────────────────────────

  askDelete(path: string): void { this.confirmDeletePath = path; }
  cancelDelete(): void { this.confirmDeletePath = null; }

  doDelete(): void {
    if (!this.confirmDeletePath) return;
    const path = this.confirmDeletePath;
    this.confirmDeletePath = null;
    this.api.deleteMediaFile(path).subscribe({
      next: () => {
        this.showToast('Archivo eliminado', 'ok');
        this.loadTree();
      },
      error: () => this.showToast('No se pudo eliminar el archivo', 'err'),
    });
  }

  // ── Copiar URL ────────────────────────────────────────────────────────────

  copyUrl(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      this.showToast('URL copiada al portapapeles', 'ok');
    });
  }

  // ── Utilidades ────────────────────────────────────────────────────────────

  isImage(node: FileNode): boolean {
    return !!node.mimeType?.startsWith('image/');
  }

  isVideo(node: FileNode): boolean {
    return !!node.mimeType?.startsWith('video/');
  }

  formatSize(bytes?: number): string {
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  private showToast(msg: string, type: 'ok' | 'err'): void {
    this.toastMsg = msg;
    this.toastType = type;
    setTimeout(() => { this.toastMsg = ''; }, 3500);
  }
}
