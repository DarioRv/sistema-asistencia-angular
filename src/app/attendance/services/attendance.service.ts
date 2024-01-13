import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Attendance } from "../interfaces/attendance.interface";
import { Observable, catchError, map, of } from "rxjs";
import { Course } from "src/app/courses/interfaces/course.interface";

@Injectable({
  providedIn: 'root'
})
export class attendanceService {

  public baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * HTTP get request to find a course by attendance code
   * @param code attendance code to use for the search
   * @returns Observable of course or undefined if not found or error ocurred
   */
  findCourseByCode(code: string): Observable<Course | undefined> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses?attendanceCode=${code}`).pipe(
      map( (courses: Course[]) => {
        if (courses.length > 0) {
          return courses[0];
        } else {
          return undefined;
        }
      }),
      catchError( err => of(undefined))
    );
  }

  /**
   * Register the attendance of a student
   * @param attendance attendance to register
   */
  registerAttendance(attendance: Attendance): Observable<Attendance | undefined> {
    return this.http.post<Attendance>(`${this.baseUrl}/attendances`, attendance)
    .pipe(
      catchError( err => of(undefined) )
    );
  }

  /**
   * Save attendance in the local storage
   */
  saveAttendance(attendance: Attendance): void {
    const attendances: Attendance[] = JSON.parse(localStorage.getItem('attendances') || '[]');
    attendances.push(attendance);
    localStorage.setItem('attendances', JSON.stringify(attendances));
  }

  /**
   * Check if the student is registered in the course.
   * @param lu student's lu
   * @param courseId course's id
   * @returns true if the student is registered in the course, false otherwise
   */
  isStudentRegisteredInCourse(lu: string, course: Course): boolean {
    if (!course.students) return false;

    return course.students.some( student => student.lu === lu);
  }
}
