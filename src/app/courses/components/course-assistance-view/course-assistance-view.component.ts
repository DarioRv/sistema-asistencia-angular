import { Component, Input, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';

@Component({
  selector: 'course-assistance-view',
  templateUrl: './course-assistance-view.component.html',
  styles: [
  ]
})
export class CourseAssistanceViewComponent implements OnInit {
  @Input({ required: true, alias: 'courseData' })
  courseId!: number;
  attendanceCode?: string;

  constructor(private courseData: CoursesDataService) { }

  ngOnInit(): void {
    this.courseData.findCourseById(this.courseId).subscribe( course => {

    });
  }

  onChangeAttendanceCode(): void {
    const newCode = this.generateRandomCode();
    this.attendanceCode = newCode;
  }

  generateRandomCode(): string {
    const length = 4;
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
