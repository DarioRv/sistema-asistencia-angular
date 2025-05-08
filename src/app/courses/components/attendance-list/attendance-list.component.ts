import { Component, OnInit, input } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
    selector: 'course-attendance-list',
    templateUrl: './attendance-list.component.html',
    styles: [],
    imports: [MatButton, MatIcon, MatTooltip, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LoaderComponent]
})
export class AttendanceListComponent implements OnInit {
  readonly courseId = input.required<string>();
  attendances: Array<Array<boolean | string>> = [];
  displayedColumns: string[] = ['fullName', 'status'];
  isLoading: boolean = false;

  constructor(
    private attendanceService: AttendanceService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getStudentsAttendance();
  }

  /**
   * Gets the students attendance for a course
   */
  getStudentsAttendance(): void {
    this.isLoading = true;
    this.attendanceService.getStudentsAttendance(this.courseId()).subscribe({
      next: (attendances) => {
        attendances.shift();
        this.attendances = attendances;
        this.isLoading = false;
      },
      error: () => {
        this.snackbarService.showSnackbar(
          'No se pudo obtener la lista de asistencias'
        );
        this.isLoading = false;
      },
    });
  }
}
