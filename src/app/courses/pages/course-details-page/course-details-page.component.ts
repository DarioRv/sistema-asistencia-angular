import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

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

  redirectToCourseListPage() {
    this.router.navigate(['/dashboard/courses']);
  }


  reloadCurrentPage(uri: string) {

  }

  onEditCourse($event: Course): void {
    this.coursesDataService.updateCourse($event).subscribe( () => {
      this.snackbarService.showSnackbar('Se ha actualizado el curso.');
      this.refreshCourseData();
    });
  }

  refreshCourseData() {
    this.coursesDataService.findCourseById(this.course.id).subscribe( (course) => {
      if (!course) return;
      this.course = course;
    });
  }
}
