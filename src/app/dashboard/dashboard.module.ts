import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CourseSettingsComponent } from './components/course-settings/course-settings.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CourseAssistanceViewComponent } from './components/course-assistance-view/course-assistance-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { DangerZoneOptionsComponent } from './components/danger-zone-options/danger-zone-options.component';
import { CookieService } from 'ngx-cookie-service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardPlaceholderComponent } from './components/card-placeholder/card-placeholder.component';
import { TablePlaceholderComponent } from './components/table-placeholder/table-placeholder.component';
import { TabGroupPlaceholderComponent } from './components/tab-group-placeholder/tab-group-placeholder.component';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './components/course-form/course-form.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    CoursesPageComponent,
    CourseCardComponent,
    AccountPageComponent,
    CourseDetailsPageComponent,
    StudentListComponent,
    CourseSettingsComponent,
    CourseAssistanceViewComponent,
    ScheduleFormComponent,
    DangerZoneOptionsComponent,
    SearchBoxComponent,
    CardPlaceholderComponent,
    TablePlaceholderComponent,
    TabGroupPlaceholderComponent,
    CourseFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    PrimeNgModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CookieService]
})
export class DashboardModule { }
