import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { PlainAttendance } from '../../interfaces/plain-attendance.interface';

import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-attendance-history-page',
    templateUrl: './attendance-history-page.component.html',
    styles: [],
    imports: [MatIcon, RouterLink]
})
export class AttendanceHistoryPageComponent implements OnInit {
  attendanceHistory: PlainAttendance[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.attendanceHistory = this.getAttendanceHistory();
  }

  /**
   * Recover the attendance history from the local storage
   * @returns an array of attendance
   */
  getAttendanceHistory(): PlainAttendance[] {
    return JSON.parse(localStorage.getItem('attendances')!) || [];
  }
}
