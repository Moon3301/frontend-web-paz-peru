import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent }            from './layout/admin-layout.component';
import { LoginComponent }                  from './pages/login/login.component';
import { DashboardComponent }              from './pages/dashboard/dashboard.component';
import { ProjectsListComponent }           from './pages/projects/projects-list.component';
import { ProjectEditComponent }            from './pages/projects/project-edit.component';
import { DistrictsComponent }              from './pages/districts/districts.component';
import { PromotionsAdminComponent }        from './pages/promotions/promotions-admin.component';
import { DeliveredProjectsAdminComponent } from './pages/delivered-projects/delivered-projects-admin.component';
import { MediaManagerComponent }          from './pages/media-manager/media-manager.component';
import { BlogAdminComponent }             from './pages/blog/blog-admin.component';
import { PrivacyPolicyAdminComponent }    from './pages/privacy-policy/privacy-policy-admin.component';
import { DevToolsAdminComponent }         from './pages/dev-tools/dev-tools-admin.component';
import { HomeAdminComponent }             from './pages/home/home-admin.component';
import { SeoAdminComponent }             from './pages/seo/seo-admin.component';
import { UsersAdminComponent }           from './pages/users/users-admin.component';
import { NosotrosAdminComponent }        from './pages/nosotros/nosotros-admin.component';
import { AdminAuthGuard }                  from './guards/admin-auth.guard';

const routes: Routes = [
  // Login — sin layout
  {
    path: 'login',
    component: LoginComponent,
  },

  // Panel de administración — con sidebar layout + guard
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: '',                  component: DashboardComponent,              pathMatch: 'full' },
      { path: 'projects',          component: ProjectsListComponent           },
      { path: 'projects/:id',      component: ProjectEditComponent            },
      { path: 'districts',         component: DistrictsComponent              },
      { path: 'delivered-projects',component: DeliveredProjectsAdminComponent },
      { path: 'home',              component: HomeAdminComponent              },
      { path: 'nosotros',          component: NosotrosAdminComponent          },
      { path: 'promotions',        component: PromotionsAdminComponent        },
      { path: 'media',             component: MediaManagerComponent           },
      { path: 'blog',              component: BlogAdminComponent              },
      { path: 'privacy-policy',   component: PrivacyPolicyAdminComponent     },
      { path: 'seo',              component: SeoAdminComponent               },
      { path: 'users',            component: UsersAdminComponent             },
      { path: 'dev-tools',        component: DevToolsAdminComponent          },
      { path: '**',                redirectTo: ''                             },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
