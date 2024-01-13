import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesDataService } from 'src/app/courses/services/courses-data.service';

@Component({
  selector: 'code-introduction-page',
  templateUrl: './code-introduction-page.component.html',
  styles: [
  ]
})
export class CodeIntroductionPageComponent {
  form = this.formBuilder.group({
    code: ['', Validators.required]
  });

  isLoading = false;
  courseNotFound = false;

  constructor(private formBuilder: FormBuilder, private courseDataService: CoursesDataService, private router: Router) { }

  get code(): FormControl {
    return this.form.get('code') as FormControl;
  }

  /**
   * Submit the form and redirect to the register attendance page if the attendance code is valid
   */
  onSubmit(): void {
    this.isLoading = true;
    this.courseNotFound = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.isLoading = false;
      return;
    }

    this.courseDataService.findCourseByCode(this.code.value).subscribe((course) => {
      if (!course) {
        this.courseNotFound = true;
        return;
      }
      this.redirectToRegisterAttendancePage(course.attendanceCode!);
    });
    this.isLoading = false;
  }

  /**
   * Redirect to the register attendance page
   * @param attendanceCode attendance code of the course
   */
  redirectToRegisterAttendancePage(attendanceCode: string): void {
    this.router.navigate(['/attendance/code', attendanceCode]);
  }

}
