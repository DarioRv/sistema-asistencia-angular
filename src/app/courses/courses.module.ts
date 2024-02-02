import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CourseSettingsComponent } from './components/course-settings/course-settings.component';
import { CourseAssistanceViewComponent } from './components/course-assistance-view/course-assistance-view.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { DangerZoneOptionsComponent } from './components/danger-zone-options/danger-zone-options.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardPlaceholderComponent } from './components/card-placeholder/card-placeholder.component';
import { TablePlaceholderComponent } from './components/table-placeholder/table-placeholder.component';
import { TabGroupPlaceholderComponent } from './components/tab-group-placeholder/tab-group-placeholder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormPageComponent } from './pages/course-form-page/course-form-page.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseCardComponent,
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
    CourseFormPageComponent,
    UploadFileComponent,
    DragAndDropDirective,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class CoursesModule { }
