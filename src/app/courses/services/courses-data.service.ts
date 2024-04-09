import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/course.interface';
import { CreateCourse } from '../interfaces/create-course.interface';
import { CoursesDataResponse } from '../interfaces/courses-data-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  private baseUrl: string = environment.API_URL;
  private _cache = signal<Course[]>([]);

  public cache = computed(() => this._cache());

  constructor(private http: HttpClient) {}

  /**
   * HTTP get request to get all courses for a user
   * @returns Observable of courses array, throws error if there is no data
   */
  getCourses(userId: string): Observable<Course[]> {
    const url = `${this.baseUrl}/cursos/usuario/${userId}`;

    return this.http.get<CoursesDataResponse>(url).pipe(
      map(({ cursos }) => cursos),
      tap((courses) => this._cache.set(courses)),
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * HTTP post request to add a new course
   * @param course course to add
   * @returns Observable of course created if successful, throws error if there is an error
   */
  addCourse(course: CreateCourse): Observable<Course> {
    const url = `${this.baseUrl}/cursos`;
    const body = course;

    return this.http.post<Course>(url, body).pipe(
      tap(() => this.resetCache()),
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * HTTP patch request to update a course
   * @param course course to update
   * @returns Observable of course or undefined
   */
  updateCourse(course: Course): Observable<Course> {
    const url = `${this.baseUrl}/cursos`;
    const body = course;

    return this.http.patch<Course>(url, body).pipe(
      tap(() => this.resetCache()),
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * HTTP delete request to delete a course
   * @param id id of the course to delete
   * @returns Observable of true if the course was deleted, false otherwise
   */
  deleteCourseById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/cursos/${id}`).pipe(
      map((resp) => true),
      tap(() => this.resetCache()),
      catchError((err) => of(false))
    );
  }

  /**
   * HTTP get request to find a course by id
   * @param id id of the course to find
   * @returns Observable of course or undefined
   */
  findCourseById(id: string): Observable<Course> {
    const url = `${this.baseUrl}/cursos/id/${id}`;

    return this.http.get<CoursesDataResponse>(url).pipe(
      map(({ curso }) => curso),
      catchError((err) => throwError(() => err))
    );
  }

  /**
   * HTTP get request to get courses suggestions for a search term
   * @param searchTerm search term to use
   * @returns Observable of courses array
   */
  getSuggestions(searchTerm: string): Course[] {
    const occurrences = this.cache().filter((course) =>
      course.nombre.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return occurrences;
  }

  generateAttendanceCode(courseId: string): Observable<string> {
    const url = `${this.baseUrl}/cursos/${courseId}/attendanceCode`;

    return this.http
      .get<string>(url)
      .pipe(catchError((err) => throwError(() => err)));
  }

  private resetCache(): void {
    this._cache.set([]);
  }
}
