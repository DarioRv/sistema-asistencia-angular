import { Component, input } from '@angular/core';

import { Course } from '../../interfaces/course.interface';
import { ClassScheduleComponent } from '../class-schedule/class-schedule.component';
import { MatDivider } from '@angular/material/list';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { DangerZoneOptionsComponent } from '../danger-zone-options/danger-zone-options.component';

@Component({
  selector: 'course-settings',
  templateUrl: './course-settings.component.html',
  styles: [],
  imports: [
    ClassScheduleComponent,
    MatDivider,
    UploadFileComponent,
    DangerZoneOptionsComponent,
  ],
})
export class CourseSettingsComponent {
  readonly course = input.required<Course>({ alias: 'courseData' });

  constructor() {}

  disableAssistance(): boolean {
    return true;
  }
}
