import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { environment } from 'src/environments/environment';
import { AttendanceService } from '../../services/attendance.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'course-assistance-view',
  templateUrl: './course-assistance-view.component.html',
  styles: [],
})
export class CourseAssistanceViewComponent {
  @Input({ required: true, alias: 'courseData' })
  course!: Course;
  @Output()
  changeAttendanceCodeEvent: EventEmitter<string> = new EventEmitter<string>();

  qrCodeUrl: string = `${environment.API_URL}/attendance/code/`;
  seeQRCode: boolean = false;

  constructor(
    private courseDataService: CoursesDataService,
    private attendanceService: AttendanceService,
    private snackbarService: SnackbarService
  ) {}

  /**
   * Generates a new random code for the course
   */
  onChangeAttendanceCode(): void {
    this.generateAttendanceCode();
  }

  /**
   * Shows the QR code
   */
  showQRCode(): void {
    this.seeQRCode = !this.seeQRCode;
  }
  generateAttendanceCode(): void {
    this.courseDataService.generateAttendanceCode(this.course.id).subscribe({
      next: (attendanceCode) => {
        this.changeAttendanceCodeEvent.emit(attendanceCode);
      },
      error: (err) => {
        // TODO mejorar
        console.error(err);
      },
    });
  }

  /**
   * Downloads the attendance of the day
   */
  donwloadAttendance(): void {
    this.attendanceService
      .downloadStudentsAttendance(this.course.id)
      .subscribe({
        next: (blob) => {
          const fileUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = fileUrl;
          link.setAttribute('style', 'display: none');
          link.download = `asistencia-${this.course.nombre}.xlsx`;
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
