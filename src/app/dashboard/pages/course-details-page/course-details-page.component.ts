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
  public isLoading: boolean = true;

  constructor(private activedRouter: ActivatedRoute, private coursesDataService: CoursesDataService) {}

  ngOnInit() {
    this.activedRouter.params.subscribe( ({id}) => {
      this.coursesDataService.getCourses().subscribe((courses) => {this.course = courses.find((course) => course.id == id)});
      this.isLoading = false;
    });
  }
}
