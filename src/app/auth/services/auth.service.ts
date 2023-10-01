import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../shared/interfaces/user.interface";
import { Observable } from "rxjs";
import { AuthUser } from "../interfaces/auth-user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  authUser(user: AuthUser): Observable<User> {
    // TODO: Change this to use the real API
    return this.http.get<User>(`${this.baseUrl}/user`);
  }
}
