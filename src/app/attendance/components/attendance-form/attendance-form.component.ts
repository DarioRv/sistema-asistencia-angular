import { Component, input } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterAttendance } from '../../interfaces/register-attendance.interface';
import { AttendanceService } from '../../services/attendance.service';
import { Attendance } from '../../interfaces/register-attendance-response.interface';
import { PlainAttendance } from '../../interfaces/plain-attendance.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'attendance-form',
    templateUrl: './attendance-form.component.html',
    styleUrls: ['./attendance-form.component.css'],
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError]
})
export class AttendanceFormComponent {
  readonly attendanceCode = input.required<string>();
  readonly courseName = input.required<string>();
  attendanceForm = this.fb.group({
    lu: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private snackbarService: SnackbarService
  ) {}

  get lu(): FormControl {
    return this.attendanceForm.get('lu') as FormControl;
  }

  onSubmit(): void {
    if (this.attendanceForm.invalid) {
      this.attendanceForm.markAllAsTouched();
      return;
    }

    const attendance: RegisterAttendance = {
      lu: this.lu.value,
      codigoAsistencia: this.attendanceCode(),
    };
    this.registerAttendance(attendance);
  }

  registerAttendance(attendance: RegisterAttendance): void {
    this.attendanceService.registerAttendance(attendance).subscribe({
      next: (attendance) => {
        this.saveAttendanceToLocalStorage(attendance);
        this.snackbarService.showSnackbar(
          'Asistencia registrada correctamente'
        );
      },
      error: (err) => {
        this.snackbarService.showSnackbar(
          err.error.message || 'Error al registrar la asistencia'
        );
      },
    });
  }

  saveAttendanceToLocalStorage(attendance: Attendance): void {
    const plainAttendance: PlainAttendance = {
      lu: attendance.estudiante.lu,
      courseName: this.courseName(),
      date: attendance.fecha,
    };

    this.attendanceService.saveAttendance(plainAttendance);
  }
}
