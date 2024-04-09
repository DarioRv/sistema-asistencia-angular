import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from '../../services/courses-data.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styles: [
  ]
})
export class CourseDetailsPageComponent implements OnInit {

  public course!: Course;
  public isLoading: boolean = true;

  constructor(private activedRouter: ActivatedRoute, private coursesDataService: CoursesDataService, private router: Router, private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.activedRouter.params.subscribe( ({id}) => {
      this.coursesDataService.findCourseById(id).subscribe( (course) => {
        if (!course) {
          this.snackbarService.showSnackbar('El curso no existe.');
          this.redirectToCourseListPage();
          return;
        }
        this.course = course;
        this.isLoading = false;
      });
    });
  }

  /**
   * Redirect to course list page.
   */
  redirectToCourseListPage() {
    this.router.navigate(['/dashboard/courses']);
  }

  /**
   * Updates attendance code for the course.
   */
  updateAttendanceCode(code: string): void {
    const course: Course = {
      codigoAsistencia: code,
      ...this.course
    };

    this.coursesDataService.updateCourse(course).subscribe({
      next: () => {
        this.snackbarService.showSnackbar('Código de asistencia actualizado');
        this.refreshCourseData();
      },
      error: (error) => {
        console.log(error);
        this.snackbarService.showSnackbar('Error al actualizar el código de asistencia');
      }
    });
  }

  /**
   * Refreshes course data when updated.
   */
  refreshCourseData() {
    this.coursesDataService.findCourseById(this.course.id).subscribe( (course) => {
      if (!course) return;
      this.course = course;
    });
  }
}
