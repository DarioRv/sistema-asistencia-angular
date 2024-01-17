import { Component, OnInit } from '@angular/core';
import { Attendance } from '../../interfaces/attendance.interface';
import { attendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance-history-page',
  templateUrl: './attendance-history-page.component.html',
  styles: [
  ]
})
export class AttendanceHistoryPageComponent implements OnInit {

  attendanceHistory: Attendance[] = [];

  constructor(private attendanceService: attendanceService) { }

  ngOnInit(): void {
    this.attendanceHistory = this.getAttendanceHistory();
    this.setCourseNames();
  }

  /**
   * Recover the attendance history from the local storage
   * @returns an array of attendance
   */
  getAttendanceHistory(): Attendance[] {
    return JSON.parse(localStorage.getItem('attendances')!) || [];
  }

  /**
   * Set course names in attendance history.
   */
  setCourseNames(): void {
    this.attendanceHistory.map( attendance => {
      this.attendanceService.getCourseName(attendance.courseId).subscribe( courseName => {
        attendance.courseName = courseName;
      });
    });
  }
}
