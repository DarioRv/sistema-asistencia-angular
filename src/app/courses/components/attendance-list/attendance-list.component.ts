import { Component, Input, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { delay, tap } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'course-attendance-list',
  templateUrl: './attendance-list.component.html',
  styles: [
  ]
})
export class AttendanceListComponent implements OnInit {
  @Input()
  courseId!: string;
  attendances: any[] = [];
  displayedColumns: string[] = ['lu', 'date'];;
  isLoading: boolean = false;

  constructor(private attendanceService: AttendanceService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.getStudentsAttendance();
  }

  /**
   * Gets the students attendance for a course
  */
 getStudentsAttendance(): void {
  this.isLoading = true;
  }
}
