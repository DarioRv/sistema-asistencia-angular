import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dashboard-course-card',
  templateUrl: './course-card.component.html',
  styles: [
  ]
})
export class CourseCardComponent {

  @Input({required: true})
  public course!: Course;
  public studentsMap = {
    '=0': 'Sin estudiantes',
    '=1': '1 estudiante',
    'other': '# estudiantes'
  }

  constructor(private courseService: CoursesDataService, private snackbar: MatSnackBar, private router: Router, private dialog: MatDialog) {}

  // TODO show a confirm dialog

  onDeleteCourse(id: number): void {
    this.courseService.deleteCourseById(id).subscribe((resp) => {
      resp ? this.showSnackBar('Curso eliminado') : this.showSnackBar('Error');

    });
  }

  showSnackBar(message: string): void {
    this.snackbar.open(message, 'Ok!', {
      duration: 2500
    });
  }
}
