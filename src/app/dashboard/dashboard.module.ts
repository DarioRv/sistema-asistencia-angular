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


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    CoursesPageComponent,
    CourseCardComponent,
    AccountPageComponent,
    CourseDetailsPageComponent,
    StudentListComponent,
    CourseSettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
