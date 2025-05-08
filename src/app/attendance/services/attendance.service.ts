import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Course } from '../.../../../../app/courses/interfaces/course.interface';
import { environment } from '../.../../../../environments/environment';
import { CoursesDataResponse } from '../.../../../../app/courses/interfaces/courses-data-response.interface';
import { RegisterAttendance } from '../interfaces/register-attendance.interface';
import {
  Attendance,
  RegisterAttendanceResponse,
} from '../interfaces/register-attendance-response.interface';
import { PlainAttendance } from '../interfaces/plain-attendance.interface';
import { ApiResponse } from '../../core/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private readonly baseUrl: string = `${environment.API_URL}`;
  private readonly attendancePaths = environment.apiEndpoints.attendance;
  private readonly coursesPaths = environment.apiEndpoints.course;

  constructor(private http: HttpClient) {}

  /**
   * HTTP get request to find a course by attendance code
   * @param code attendance code to use for the search
   * @returns Observable of course or undefined if not found or error ocurred
   */
  findCourseByCode(code: string): Observable<Course> {
    return this.http
      .get<ApiResponse<CoursesDataResponse>>(
        `${this.baseUrl}/${this.coursesPaths.getOneByAttendanceCode}/${code}`
      )
      .pipe(
        map((resp) => resp.data.curso),
        catchError((err) => throwError(() => err))
      );
  }

  /**
   * Register the attendance of a student
   * @param attendance attendance to register
   */
  registerAttendance(attendance: RegisterAttendance): Observable<Attendance> {
    return this.http
      .post<ApiResponse<RegisterAttendanceResponse>>(
        `${this.baseUrl}/${this.attendancePaths.createOne}`,
        attendance
      )
      .pipe(
        map((resp) => resp.data.asistencia),
        catchError((err) => throwError(() => err))
      );
  }

  /**
   * Save attendance in the local storage
   */
  saveAttendance(attendance: PlainAttendance): void {
    const attendances: PlainAttendance[] = JSON.parse(
      localStorage.getItem('attendances') || '[]'
    );
    attendances.push(attendance);
    localStorage.setItem('attendances', JSON.stringify(attendances));
  }
}
