import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Course } from '../../interfaces/course.interface';
import { ClassSchedule } from '../../interfaces/class-schedule.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'course-settings',
  templateUrl: './course-settings.component.html',
  styles: [
  ],
  providers: [[MessageService]]
})
export class CourseSettingsComponent {
  @Input({alias: 'courseData', required: true})
  course!: Course;
  @Output()
  onEditCourse: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private snackbar: MatSnackBar) {}

  disableAssistance(): boolean {
    return true;
  }

  /**
   * Edit the class schedule of the course and update the course in the database
   * @param $event class schedule from the child component
   */
  onEditClassSchedule($event: ClassSchedule): void {
    this.setClassSchedule($event);
    this.onEditCurrentCourse();
  }

  /**
   * Set the class schedule to the course
   * @param $event class schedule
   */
  setClassSchedule($event: ClassSchedule): void {
    this.course = {
      ...this.course,
      schedule: {
        entryTime: $event.entryTime,
        departureTime: $event.departureTime,
      }
    } as Course;
  }

  /**
   * Edit the student list of the course and update the course in the database
   * @param $event student list from the child component
   */
  onEditStudentList($event: Student[]): void {
    this.setStudentList($event);
    this.onEditCurrentCourse();
  }

  /**
   * Set the student list to the course
   * @param $event student list
  */
 setStudentList($event: Student[]): void {
    this.course = {
      ...this.course,
      students: $event
    } as Course;
  }

  /**
   * Emit the edited course to the parent component
   */
  onEditCurrentCourse(): void {
    this.onEditCourse.emit(this.course);
  }


  /**
   * Show a snackbar with the message
   * @param message message to show
   */
  showSnackbar(message: string) {
    this.snackbar.open(message, 'Ok', {
      duration: 3000
    });
  }
}
