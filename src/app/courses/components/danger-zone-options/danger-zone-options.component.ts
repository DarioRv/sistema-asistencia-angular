import { Component, Input } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'danger-zone-options',
  templateUrl: './danger-zone-options.component.html',
  styles: [
  ]
})
export class DangerZoneOptionsComponent {
  @Input({required: true}) courseId!: number;

  constructor(private coursesService: CoursesDataService, private snackbar: MatSnackBar, private router: Router, private dialog: MatDialog) { }

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
      switchMap( () => this.coursesService.deleteCourseById(this.courseId)),
      filter(wasDeleted => wasDeleted)
    )
    .subscribe(() => {
      this.showSnackbar('Curso eliminado')
      this.router.navigate(['/dashboard/courses/list']);
    });
  }

  onEditCourse() {
    this.router.navigate(['/dashboard/courses/edit', this.courseId]);
  }

  showSnackbar(message: string) {
    this.snackbar.open(message, 'ok', {
      duration: 3000,
    });
  }
}
