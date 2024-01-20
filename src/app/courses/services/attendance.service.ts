import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Attendance } from "src/app/attendance/interfaces/attendance.interface";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  public baseUrl: string = 'http://localhost:3000';

  constructor(private htpp: HttpClient) { }

  /**
   * Gets the students attendance for a course
   * @param courseId the course id
   * @returns the students attendance
   */
  getStudentsAttendance(courseId: number): Observable<Attendance[]> {
    return this.htpp.get<Attendance[]>(`${this.baseUrl}/attendances?courseId=${courseId}`);
  }

  /**
   * Gets the students attendance for a course and date
   * @param courseId the course id
   * @param date the date
   * @returns the students attendance
   */
  getStudentsAttendanceByDate(courseId: number, date: string): Observable<Attendance[]> {
    return this.htpp.get<Attendance[]>(`${this.baseUrl}/attendances?courseId=${courseId}`).pipe(
      map( (attendances) => {
        return attendances.filter( attendance => attendance.date.toString().split('T')[0] === date);
      })
    );
  }

}
