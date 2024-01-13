import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/courses/interfaces/course.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { attendanceService } from '../../services/attendance.service';
import { Attendance } from '../../interfaces/attendance.interface';

@Component({
  selector: 'register-attendance-page',
  templateUrl: './register-attendance-page.component.html',
  styles: [
  ]
})
export class RegisterAttendancePageComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    lu: ['', Validators.required]
  });
  course: Course | undefined;
  isLoading = true;
  isFormLoading = false;

  constructor(private activatedRouter: ActivatedRoute, private attendanceService: attendanceService, private snackbar: SnackbarService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( ({attendanceCode}) => {
      this.attendanceService.findCourseByCode(attendanceCode).subscribe( (course) => {
        if (!course) {
          this.snackbar.showSnackbar('No se encontró el curso');
          return;
        }
        this.course = course;
        this.isLoading = false;
      });
    });
  }

  get lu(): FormControl {
    return this.form.get('lu') as FormControl;
  }

  onSubmit(): void {
    this.isFormLoading = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.isFormLoading = false;
      return;
    }

    if (this.isOutTime()) {
      this.snackbar.showSnackbar('Ya no podes registrar asistencia');
      this.isFormLoading = false;
      return;
    }

    const attendance: Attendance = {
      lu: this.lu.value,
      courseId: this.course!.id,
      date: new Date()
    };

    if (!this.attendanceService.isStudentRegisteredInCourse(attendance.lu, this.course!)) {
      this.snackbar.showSnackbar('No estas inscripto en el curso');
      this.isFormLoading = false;
      return;
    }

    this.attendanceService.registerAttendance(attendance).subscribe( (attendance) => {
      if (!attendance) {
        this.snackbar.showSnackbar('No se pudo registrar la asistencia');
        this.isFormLoading = false;
        return;
      }
      this.snackbar.showSnackbar('Asistencia registrada');
      this.attendanceService.saveAttendance(attendance);
      this.isFormLoading = false;
    });
  }

  /**
   * Check if the course has a departure time
   * @returns true if the course has a departure time, false otherwise
   */
  hasDepartureTime(): boolean {
    return this.course?.schedule?.departureTime !== undefined;
  }

  /**
   * Check if the current time is after the departure time of the course
   * @returns true if the current time is after the departure time of the course, false otherwise
   */
  isOutTime(): boolean {
    if (!this.course?.schedule?.departureTime) {
      return false;
    }
    const departureTime = new Date(this.course.schedule.departureTime);
    const now = new Date();
    return now.getHours() >= departureTime.getHours() && now.getMinutes() >= departureTime.getMinutes();
  }
}
