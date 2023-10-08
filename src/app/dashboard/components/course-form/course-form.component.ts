import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styles: [
  ]
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    universityProgram: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });
  editMode: boolean = false;

  constructor(private courseService: CoursesDataService, private router: Router, private activatedRoute: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.setMode();
  }

  setMode() {
    if (!this.router.url.includes('edit')) return;

    this.editMode = true;
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.courseService.findCourseById(id) ),
    ).subscribe( course => {
      if (!course) {
        return this.router.navigateByUrl('/dashboard');
      }
      this.courseForm.reset(course);
      console.log(course)
      return;
    });
  }

  get title(){
    return this.courseForm.get('title');
  }

  get description(){
    return this.courseForm.get('description');
  }

  get universityProgram(){
    return this.courseForm.get('universityProgram');
  }

  get currentCourse(): Course {
    const course: Course = this.courseForm.value as Course;
    return course;
  }

  onSubmit(): void {
    if (this.courseForm.invalid) return;
    if (this.currentCourse.id) {
      this.courseService.updateCourse(this.currentCourse).subscribe( () => {
        this.showSnackBar('Course updated successfully!');
      });
      return;
    }

    this.courseService.addCourse(this.currentCourse).subscribe( () => {
      this.showSnackBar('Course added successfully!');
    });
  }

  showSnackBar(message: string): void {
    this.snackbar.open(message, 'Ok!', {
      duration: 2500
    });
  }
}
