import { Component, Input } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Course } from '../../interfaces/course.interface';
import { ClassSchedule } from '../../interfaces/class-schedule.interface';
import { CoursesDataService } from '../../services/courses-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private coursesDataService: CoursesDataService, private snackbar: MatSnackBar) {}

  disableAssistance(): boolean {
    console.log("check")
    return true;
  }

  /**
   * Edit the class schedule of the course and update the course in the database
   * @param $event class schedule from the child component
   */
  onEditClassSchedule($event: ClassSchedule): void {
    this.setClassSchedule($event);

    this.coursesDataService.updateCourse(this.course).subscribe( () => {
      this.showSnackbar('Se ha actualizado el horario del curso.');
    });
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
   * Show a snackbar with the message
   * @param message message to show
   */
  showSnackbar(message: string) {
    this.snackbar.open(message, 'Ok', {
      duration: 3000
    });
  }
}
