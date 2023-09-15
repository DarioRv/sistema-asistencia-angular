import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styles: [
  ]
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private coursesDataService: CoursesDataService) {}

  ngOnInit(): void {
      this.courses = this.coursesDataService.getCoursesData();
  }

}
