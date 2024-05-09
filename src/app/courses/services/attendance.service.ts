import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AttendanceDataResponse } from '../interfaces/attendance-data-response.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private baseUrl: string = environment.API_URL;

  constructor(private htpp: HttpClient) {}

  /**
   * Gets the students attendance for a course
   * @param courseId the course id
   * @returns the students attendance
   */
  getStudentsAttendance(
    courseId: string
  ): Observable<Array<Array<boolean | string>>> {
    const url = `${this.baseUrl}/asistencias/obtenerAsistenciasPorCursoYPeriodo`;
    const params = {
      idCurso: courseId,
      fechaInicio: moment().format('DD/MM/YYYY'),
      fechaFin: moment().format('DD/MM/YYYY'),
    };

    return this.htpp.get<AttendanceDataResponse>(url, { params: params }).pipe(
      map(({ asistencias }) => asistencias),
      catchError((err) => throwError(() => err))
    );
  }

  downloadStudentsAttendance(courseId: string): Observable<Blob> {
    const url = `${this.baseUrl}/asistencias/obtenerAsistenciasPorCursoYPeriodo/excel`;
    const params = {
      idCurso: courseId,
      fechaInicio: moment().format('DD/MM/YYYY'),
      fechaFin: moment().format('DD/MM/YYYY'),
    };
    return this.htpp.request('get', url, { params, responseType: 'blob' }).pipe(
      map((resp) => resp),
      catchError((err) => throwError(() => err))
    );
  }
}
