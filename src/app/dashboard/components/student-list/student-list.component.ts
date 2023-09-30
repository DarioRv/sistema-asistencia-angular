import { Component, Input } from '@angular/core';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'course-student-list',
  templateUrl: './student-list.component.html',
  styles: [
  ]
})
export class StudentListComponent {
  @Input()
  public students: Student[] | undefined;
}
