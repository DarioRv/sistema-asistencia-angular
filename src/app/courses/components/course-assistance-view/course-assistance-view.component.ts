import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'course-assistance-view',
  templateUrl: './course-assistance-view.component.html',
  styles: [
  ]
})
export class CourseAssistanceViewComponent {
  @Input({ required: true, alias: 'courseData' })
  course!: Course;
  @Output()
  changeAttendanceCodeEvent: EventEmitter<string> = new EventEmitter<string>();

  qrCodeUrl: string = `${environment.API_URL}/attendance/code/`;
  seeQRCode: boolean = false;

  constructor(private courseDataService: CoursesDataService) { }

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
        console.error(err);
      }
    });
  }
}
