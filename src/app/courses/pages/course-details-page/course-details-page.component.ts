import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from '../../services/courses-data.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styles: [],
})
export class CourseDetailsPageComponent implements OnInit {
  public course!: Course;
  public isLoading: boolean = true;

  constructor(
    private activedRouter: ActivatedRoute,
    private coursesDataService: CoursesDataService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    this.activedRouter.params.subscribe(({ id }) => {
      this.getCourse(id);
    });
  }

  /**
   * Get course by id.
   * @param id course id
   */
  getCourse(id: string) {
    this.coursesDataService.findCourseById(id).subscribe((course) => {
      if (!course) {
        this.snackbarService.showSnackbar('El curso no existe.');
        this.redirectToCourseListPage();
        return;
      }
      this.course = course;
      this.isLoading = false;
    });
  }

  /**
   * Redirect to course list page.
   */
  redirectToCourseListPage() {
    this.router.navigate(['/dashboard/courses']);
  }

  /**
   * Refreshes course data when updated.
   */
  refreshCourseData() {
    this.coursesDataService
      .findCourseById(this.course.id)
      .subscribe((course) => {
        if (!course) return;
        this.course = course;
      });
  }
}
