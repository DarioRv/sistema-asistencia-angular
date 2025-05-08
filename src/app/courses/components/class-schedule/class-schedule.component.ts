import { Component, Input } from '@angular/core';

@Component({
    selector: 'class-schedule',
    templateUrl: './class-schedule.component.html',
    styles: [],
    standalone: false
})
export class ClassScheduleComponent {
  @Input({ required: true })
  courseId!: string;
}
