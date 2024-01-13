import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  // TODO: refactor this to use a real API
  // INFO: this is a fake API using json-server

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * HTTP get request to get all courses
   * @returns Observable of courses array
   */
  getCourses():Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  /**
   * HTTP post request to add a new course
   * @param course course to add
   * @returns Observable of course or undefined
   */
  addCourse(course: Course): Observable<Course | undefined> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course).pipe(
      catchError( err => of(undefined) )
    );
  }

  /**
   * HTTP patch request to update a course
   * @param course course to update
   * @returns Observable of course or undefined
   */
  updateCourse(course: Course): Observable<Course | undefined> {
    return this.http.patch<Course>(`${this.baseUrl}/courses/${course.id}`, course).pipe(
      catchError( err => of(undefined) )
    );
  }

  /**
   * HTTP delete request to delete a course
   * @param id id of the course to delete
   * @returns Observable of true if the course was deleted, false otherwise
   */
  deleteCourseById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/courses/${id}`).pipe(
      map( resp => true ),
      catchError( err => of(false) )
    );
  }

  /**
   * HTTP get request to find a course by id
   * @param id id of the course to find
   * @returns Observable of course or undefined
   */
  findCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`).pipe(
      catchError( err => of(undefined))
    );
  }

  /**
   * HTTP get request to get courses suggestions for a search term
   * @param searchTerm search term to use
   * @returns Observable of courses array
   */
  getSuggestions(searchTerm: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses?q=${searchTerm}`);
  }

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
}
