import { Component } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'course-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  public suggestedCourses: Course[] = [];
  public searchInput = new FormControl('');

  constructor(private coursesDataService: CoursesDataService, private router: Router) {}

  searchCourse(): void {
    const value: string = this.searchInput.value || '';
    this.coursesDataService.getSuggestions(value).subscribe(courses => this.suggestedCourses = courses);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      return;
    }

    const course: Course = event.option.value;
    this.searchInput.setValue(course.title);
    this.router.navigate(['/dashboard/course', course.id]);
  }
}
