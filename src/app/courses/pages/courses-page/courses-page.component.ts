import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { RequestStatus } from 'src/app/shared/types/request-status.type';
import { NgSwitch, NgSwitchCase, NgIf, NgFor } from '@angular/common';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CardPlaceholderComponent } from '../../components/card-placeholder/card-placeholder.component';
import { AlertDirective } from '../../../shared/directives/alert.directive';
import { AlertTitleDirective } from '../../../shared/directives/alert-title.directive';
import { AlertDescriptionDirective } from '../../../shared/directives/alert-description.directive';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { AlertErrorTitleDirective } from '../../../shared/directives/alert-error-title.directive';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styles: [
        `
      .courses-list,
      .loading-layout {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1rem;
      }
    `,
    ],
    imports: [NgSwitch, SearchBoxComponent, MatButton, RouterLink, MatIcon, NgSwitchCase, CardPlaceholderComponent, NgIf, AlertDirective, AlertTitleDirective, AlertDescriptionDirective, NgFor, CourseCardComponent, AlertErrorTitleDirective]
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] = [];
  public status: RequestStatus = 'pending';

  constructor(
    private coursesDataService: CoursesDataService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  /**
   * Gets all courses for the current user
   */
  getAllCourses(): void {
    this.coursesDataService
      .getCourses(this.authService.currentUser()!.id)
      .subscribe({
        next: (courses) => {
          this.courses = courses;
          this.status = 'success';
        },
        error: (error) => {
          if (error.status === 0) {
            this.status = 'fail';
            return;
          }

          this.status = 'error';
        },
      });
  }
}
