import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styles: [
  ]
})
export class CourseDetailsPageComponent implements OnInit {

  public course?: Course;

  constructor(private activedRouter: ActivatedRoute, private coursesDataService: CoursesDataService) {}

  ngOnInit() {
    this.activedRouter.params.subscribe( ({id}) => {
      this.course = this.coursesDataService.findCourseById(id);
    });
  }
}