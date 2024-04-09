import { Component } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'course-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  public suggestedCourses: Course[] = [];
  public searchInput = new FormControl('');

  constructor(
    private coursesDataService: CoursesDataService,
    private router: Router
  ) {}

  /**
   * Method to get the course suggestions for the search term
   */
  searchCourse(): void {
    const searchTerm: string = this.searchInput.value || '';
    this.suggestedCourses = this.coursesDataService.getSuggestions(searchTerm);
  }

  /**
   * Method to navigate to the selected course
   * @param event The event that contains the selected option
   */
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      return;
    }

    const course: Course = event.option.value;
    this.searchInput.setValue(course.nombre);
    this.router.navigate(['/dashboard/courses/view', course.id]);
  }
}
