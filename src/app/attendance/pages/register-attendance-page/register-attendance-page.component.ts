import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/courses/interfaces/course.interface';
import { CoursesDataService } from 'src/app/courses/services/courses-data.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'register-attendance-page',
  templateUrl: './register-attendance-page.component.html',
  styles: [
  ]
})
export class RegisterAttendancePageComponent implements OnInit {

  course: Course | undefined;
  isLoading = true;

  constructor(private activatedRouter: ActivatedRoute, private coursesDataService: CoursesDataService, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( ({id}) => {
      this.coursesDataService.findCourseById(id).subscribe( (course) => {
        if (!course) {
          this.snackbar.showSnackbar('No se encontró el curso');
          return;
        }
        this.course = course;
        this.isLoading = false;
        console.log(course);
      });
    });
  }

  hasDepartureTime(): boolean {
    return this.course?.schedule?.departureTime !== undefined;
  }

  isOutTime(): boolean {
    if (!this.course?.schedule?.departureTime) {
      return false;
    }
    const departureTime = new Date(this.course.schedule.departureTime);
    const now = new Date();
    return now.getHours() >= departureTime.getHours() && now.getMinutes() >= departureTime.getMinutes();
  }
}
