import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG components used in admin
import { Slider }         from 'primeng/slider';
import { ColorPicker }    from 'primeng/colorpicker';
import { SelectButton }   from 'primeng/selectbutton';
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primeng/accordion';
import { Tooltip }        from 'primeng/tooltip';
import { ToggleSwitch }   from 'primeng/toggleswitch';

import { AdminRoutingModule } from './admin-routing.module';

// Layout
import { AdminLayoutComponent }            from './layout/admin-layout.component';

// Pages
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

// Section editors
import { HeroEditorComponent }        from './components/project-editor/hero-editor.component';
import { SpecsEditorComponent }       from './components/project-editor/specs-editor.component';
import { AmenitiesEditorComponent }   from './components/project-editor/amenities-editor.component';
import { GalleryEditorComponent }     from './components/project-editor/gallery-editor.component';
import { VideoEditorComponent }       from './components/project-editor/video-editor.component';
import { VirtualTourEditorComponent } from './components/project-editor/virtual-tour-editor.component';
import { UbicationEditorComponent }   from './components/project-editor/ubication-editor.component';
import { ExecutivesEditorComponent }  from './components/project-editor/executives-editor.component';
import { PromoBannerEditorComponent } from './components/project-editor/promo-banner-editor.component';
import { QuoterEditorComponent }     from './components/project-editor/quoter-editor.component';

const DECLARATIONS = [
  // Layout
  AdminLayoutComponent,

  // Pages
  LoginComponent,
  DashboardComponent,
  ProjectsListComponent,
  ProjectEditComponent,
  DistrictsComponent,
  PromotionsAdminComponent,
  DeliveredProjectsAdminComponent,
  MediaManagerComponent,
  BlogAdminComponent,
  PrivacyPolicyAdminComponent,
  DevToolsAdminComponent,
  HomeAdminComponent,
  SeoAdminComponent,
  UsersAdminComponent,
  NosotrosAdminComponent,

  // Section editors
  HeroEditorComponent,
  SpecsEditorComponent,
  AmenitiesEditorComponent,
  GalleryEditorComponent,
  VideoEditorComponent,
  VirtualTourEditorComponent,
  UbicationEditorComponent,
  ExecutivesEditorComponent,
  PromoBannerEditorComponent,
  QuoterEditorComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    // PrimeNG
    Slider,
    ColorPicker,
    SelectButton,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    Tooltip,
    ToggleSwitch,
  ],
})
export class AdminModule {}
