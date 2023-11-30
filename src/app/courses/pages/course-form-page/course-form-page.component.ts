import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-form-page',
  templateUrl: './course-form-page.component.html',
  styles: [
  ]
})
export class CourseFormPageComponent {
  courseForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    universityProgram: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });
  editMode: boolean = false;
  isLoading: boolean = false;

  constructor(private courseService: CoursesDataService, private router: Router, private activatedRoute: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.setMode();
  }

  /**
   * Method to check if the form is in add mode
   * @returns true if the form is in add mode, false otherwise
   */
  isCreateMode(): boolean {
    return !this.router.url.includes('edit')
  }

  /**
   * Method to set the mode of the form
   * If the url contains the word 'edit' then the form is in edit mode
   * If the url doesn't contain the word 'edit' then the form is in add mode
   */
  setMode() {
    if (this.isCreateMode()) return;

    this.setEditMode();
  }

  /**
   * Method to set the form in edit mode
   */
  setEditMode() {
    this.editMode = true;
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.courseService.findCourseById(id) ),
    ).subscribe( course => {
      if (!course) {
        return this.router.navigateByUrl('/dashboard');
      }
      this.courseForm.reset(course);
      return;
    });
  }

  /**
   * Method to get the title form control
   */
  get title(){
    return this.courseForm.get('title');
  }

  /**
   * Method to get the description form control
   */
  get description(){
    return this.courseForm.get('description');
  }

  /**
   * Method to get the universityProgram form control
   */
  get universityProgram(){
    return this.courseForm.get('universityProgram');
  }

  /**
   * Method to get the current course from the form
   */
  get currentCourse(): Course {
    const course: Course = this.courseForm.value as Course;
    return course;
  }

  /**
   * Method to handle the form submit event
   * If the form is invalid, then the method returns
   * If the form is valid, then the method adds or updates the course
   * and navigates to the courses list page
   */
  onSubmit(): void {
    this.isLoading = true;
    if (this.courseForm.invalid) {
      this.isLoading = false;
      return;
    }

    if (this.isCreateMode()) {
      this.createCourse();
    } else {
      this.updateCourse();
    }
  }

  /**
   * Method to update the course
   */
  updateCourse(): void {
    this.courseService.updateCourse(this.currentCourse).subscribe( () => {
      this.showSnackBar('¡El curso ha sido actualizado!');
      this.isLoading = false;
      this.router.navigateByUrl('dashboard/courses/list');
    });
  }

  /**
   * Method to create the course
   */
  createCourse() {
    this.courseService.addCourse(this.currentCourse).subscribe( () => {
      this.showSnackBar('¡El curso se ha creado!');
      this.isLoading = false;
      this.router.navigateByUrl('dashboard/courses/list');
    });
  }

  /**
   * Method to handle the form cancel event
   * Navigates to the courses list page
   */
  onCancel(): void {
    this.showSnackBar('Se ha cancelado la operación');
    this.router.navigateByUrl('/dashboard/courses/list');
  }

  /**
   * Method to show a snackbar
   * @param message The message to show in the snackbar
   */
  showSnackBar(message: string): void {
    this.snackbar.open(message, 'Ok!', {
      duration: 2500
    });
  }
}
