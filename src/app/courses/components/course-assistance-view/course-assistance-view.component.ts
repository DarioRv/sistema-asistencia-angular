import { Component, input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { AttendanceService } from '../../services/attendance.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { AttendanceCodeComponent } from '../attendance-code/attendance-code.component';
import { MatDivider } from '@angular/material/list';
import { AttendanceListComponent } from '../attendance-list/attendance-list.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'course-assistance-view',
    templateUrl: './course-assistance-view.component.html',
    styles: [],
    imports: [AttendanceCodeComponent, MatDivider, AttendanceListComponent, MatButton, MatIcon]
})
export class CourseAssistanceViewComponent {
  readonly course = input.required<Course>({ alias: "courseData" });

  constructor(
    private attendanceService: AttendanceService,
    private snackbarService: SnackbarService
  ) {}

  /**
   * Downloads the attendance of the day
   */
  donwloadAttendance(): void {
    this.attendanceService
      .downloadStudentsAttendance(this.course().id)
      .subscribe({
        next: (blob) => {
          const fileUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = fileUrl;
          link.setAttribute('style', 'display: none');
          link.download = `asistencia-${this.course().nombre}.xlsx`;
          link.click();
          window.URL.revokeObjectURL(fileUrl);
          link.remove();
          this.snackbarService.showSnackbar(
            'La asistencia del día se ha descargado'
          );
        },
        error: () => {
          this.snackbarService.showSnackbar(
            'Ocurrió un error al descargar la asistencia'
          );
        },
      });
  }
}
