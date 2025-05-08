import { Component, input } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MatList, MatListItem, MatDivider } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'danger-zone-options',
    templateUrl: './danger-zone-options.component.html',
    styles: [],
    imports: [MatList, MatListItem, MatButton, MatIcon, MatDivider]
})
export class DangerZoneOptionsComponent {
  readonly courseId = input.required<string>();

  constructor(private coursesService: CoursesDataService, private snackbarService: SnackbarService, private router: Router, private dialog: MatDialog) { }

  /**
   * Method to delete the current course
   */
  onDeleteCourse() {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title: '¿Esta seguro?',
          description: 'Se eliminará el curso',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        }
      });
    dialogRef.afterClosed()
    .pipe(
      filter(result => result),
      switchMap( () => this.coursesService.deleteCourseById(this.courseId())),
      filter(wasDeleted => wasDeleted)
    )
    .subscribe(() => {
      this.snackbarService.showSnackbar('Curso eliminado')
      this.router.navigate(['/dashboard/courses/list']);
    });
  }

  /**
   * Method to edit the current course, redirect to the edit page
   */
  onEditCourse() {
    this.router.navigate(['/dashboard/courses/edit', this.courseId()]);
  }
}
