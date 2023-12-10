import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styles: [
  ]
})
export class CourseDetailsPageComponent implements OnInit {

  public course!: Course;
  public isLoading: boolean = true;

  constructor(private activedRouter: ActivatedRoute, private coursesDataService: CoursesDataService, private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.activedRouter.params.subscribe( ({id}) => {
      this.coursesDataService.findCourseById(id).subscribe( (course) => {
        if (!course) {
          this.showSnackbar('El curso no existe.');
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

  showSnackbar(message: string) {
    this.snackbar.open(message, 'Ok', {
      duration: 3000
    });
  }

}
