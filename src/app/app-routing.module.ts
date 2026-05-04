import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirect raíz → home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Admin panel (login + /admin/* with sidebar layout)
  {
    path: '',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  },

  // Public website (layout with header/footer)
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
