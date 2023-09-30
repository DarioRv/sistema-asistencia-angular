import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCourses():Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  findCourseById(id: number): Course {
    throw new Error('Not implemented yet');
  }
}
