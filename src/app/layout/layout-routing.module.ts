import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../features/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../features/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../features/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'events-fairs',
        loadChildren: () => import('../features/events-fairs/events-fairs.module').then(m => m.EventsFairsModule)
      },
      {
        path: 'promotions',
        loadChildren: () => import('../features/promotions/promotions.module').then(m => m.PromotionsModule)
      },
      {
        path: 'departamentos-en-venta',
        loadChildren: () => import('../features/apartment-sale/apartment-sale.module').then(m => m.ApartmentSaleModule)
      },
      {
        path: 'reclamaciones',
        loadChildren: () => import('../features/reclamaciones/reclamaciones.module').then(m => m.ReclamacionesModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
