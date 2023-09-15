import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'dashboard-course-card',
  templateUrl: './course-card.component.html',
  styles: [
  ]
})
export class CourseCardComponent {

  @Input()
  public course!: Course;
}
