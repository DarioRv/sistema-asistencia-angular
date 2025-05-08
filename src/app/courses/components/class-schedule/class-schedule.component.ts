import { Component, input } from '@angular/core';
import { ClassScheduleListComponent } from '../class-schedule-list/class-schedule-list.component';
import { ScheduleFormComponent } from '../schedule-form/schedule-form.component';

@Component({
    selector: 'class-schedule',
    templateUrl: './class-schedule.component.html',
    styles: [],
    imports: [ClassScheduleListComponent, ScheduleFormComponent]
})
export class ClassScheduleComponent {
  readonly courseId = input.required<string>();
}
