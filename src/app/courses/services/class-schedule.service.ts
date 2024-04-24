import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClassSchedule } from '../interfaces/class-schedule.interface';
import { ScheduleDataResponse } from '../interfaces/schedule-data-response.interface';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ClassScheduleGet } from '../interfaces/class-schedule-get.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassScheduleService {
  private baseUrl = `${environment.API_URL}/horarios`;

  constructor(private http: HttpClient) {}

  /**
   * Add a new class schedule
   * @param classSchedule The class schedule to be added
   * @returns The added class schedule
   */
  addClassSchedule(classSchedule: ClassSchedule): Observable<ClassScheduleGet> {
    const url = `${this.baseUrl}/registrar`;

    return this.http.post<ScheduleDataResponse>(url, classSchedule).pipe(
      map(({ horario }) => horario),
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * Updates a existing class schedule
   * @param classScheduleId The class schedule id
   * @returns The updated class schedule
   */
  deleteClassSchedule(classScheduleId: string): Observable<boolean> {
    const url = `${this.baseUrl}/eliminar/${classScheduleId}`;

    return this.http.delete<ScheduleDataResponse>(url).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  /**
   * Gets all class schedules by course id
   * @param courseId The course id
   * @returns The class schedules
   */
  getClassSchedulesByCourseId(
    courseId: string
  ): Observable<ClassScheduleGet[]> {
    const url = `${this.baseUrl}/obtenerHorarios/${courseId}`;

    return this.http.get<ScheduleDataResponse>(url).pipe(
      map(({ horarios }) => horarios),
      catchError(() => of([]))
    );
  }

  /**
   * Gets a class schedule by id
   * @param classScheduleId The class schedule id
   * @returns The class schedule obtained by id
   */
  getClassScheduleById(classScheduleId: string): Observable<ClassScheduleGet> {
    const url = `${this.baseUrl}/obtenerHorario/${classScheduleId}`;

    return this.http.get<ScheduleDataResponse>(url).pipe(
      map(({ horario }) => horario),
      catchError((err) => throwError(() => err))
    );
  }
}
