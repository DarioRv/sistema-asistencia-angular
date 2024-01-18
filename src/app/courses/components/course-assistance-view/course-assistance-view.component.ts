import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

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
  onEditCourse: EventEmitter<Course> = new EventEmitter<Course>();

  qrCodeUrl: string = 'localhost:4200/attendance/code/';
  seeQRCode: boolean = false;

  constructor() { }

  /**
   * Generates a new random code for the course
   */
  onChangeAttendanceCode(): void {
    const newCode = this.generateRandomCode();
    this.course.attendanceCode = newCode;

    this.onEditCourse.emit(this.course);
  }

  /**
   * Generates a random code of 4 characters
   * @returns a random code
   */
  generateRandomCode(): string {
    const length = 4;
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  /**
   * Shows the QR code
   */
  showQRCode(): void {
    this.seeQRCode = !this.seeQRCode;
  }
}
