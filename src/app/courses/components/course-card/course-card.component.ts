import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap } from 'rxjs';

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

  /**
   * Delete the selected course before a confirmation dialog
   * @param id course id to delete
   */
  onDeleteCourse(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '¿Esta seguro?', description: 'Esta a punto de eliminar el curso'}});

    dialogRef.afterClosed()
    .pipe(
      filter(result => result),
      switchMap( () => this.courseService.deleteCourseById(id)),
      filter(wasDeleted => wasDeleted)
    )
    .subscribe(() => {
      this.showSnackBar('Curso eliminado')
      this.redirectTo('dashboard/courses/list')
    });
  }

  /**
   * Show a snackbar with the given message
   */
  showSnackBar(message: string): void {
    this.snackbar.open(message, 'Ok!', {
      duration: 2500
    });
  }

  /**
   * Redirect to the given uri
   * @param uri uri to redirect
   */
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
 }
}
