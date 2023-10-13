import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Observable, catchError, map, of, tap } from "rxjs";
import { AuthUser } from "../interfaces/auth-user.interface";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // TODO: refactor this to use a real API

  private baseUrl: string = 'http://localhost:3000';
  private activeSession?: User;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  /**
   * Method to authenticate a user
   * @param user The user to authenticate
   * @returns Observable of the authenticated user or undefined if the user could not be authenticated
   */
  authenticateUser(user: AuthUser): Observable<User | undefined> {
    return this.http.get<User[]>(`${this.baseUrl}/users/?email=${user.email}&password=${user.password}`).pipe(
      map( (users: User[]) => users[0] ),
      tap( user => {
        if (user) this.login(user);
      }),
      catchError( (err) => of(undefined) )
    );
  }

  /**
   * Method to register a new user
   * @param user The user to register
   * @returns Observable of the registered user or undefined if the user could not be registered
   */
  registerUser(user: User): Observable<User | undefined> {
    return this.http.post<User>(`${this.baseUrl}/users`, user).pipe(
      catchError( (err) => of(undefined) )
    );
  }

  /**
   * Method to update a user
   * @param user The user to update
   * @returns Observable of the updated user or undefined if the user could not be updated
   */
  updateUser(user: User): Observable<User | undefined> {
    return this.http.patch<User>(`${this.baseUrl}/users/${user.id}`, user).pipe(
      catchError( (err) => of(undefined) )
    );
  }

  /**
   * Method to delete a user
   * @param id The id of the user to delete
   * @returns Observable of true if the user was deleted, false otherwise
   */
  deleteUserById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/users/${id}`).pipe(
      map( resp => true ),
      catchError( (err) => of(false) )
    );
  }

  /**
   * Method to save the session of the authenticated user
   * @param user The user to save in the session
   */
  private saveSession(user: User): void {
    this.cookieService.set('user', JSON.stringify(user));
  }

  /**
   * Method to delete the session of the authenticated user from the cookies
   */
  private deleteSession(): void {
    this.cookieService.delete('user');
  }

  /**
   * Method to set the session of the authenticated user
   */
  private setSession(user: User): void {
    this.activeSession = user;
  }

  /**
   * Method to login the authenticated user
   * @param user The user to login
   */
  login(user: User): void {
    this.saveSession(user);
    this.setSession(user);
  }

  /**
   * Method to logout the authenticated user
   */
  logout(): void {
    this.deleteSession();
    this.activeSession = undefined;
  }

  /**
   * Method to check if there is a session of the authenticated user
   * @returns True if there is a session of the authenticated user, false otherwise
   */
  checkAuthentication(): Observable<boolean> {
    if (!this.cookieService.check('user') || this.cookieService.get('user') == 'undefined') return of(false);
    const user: User = JSON.parse(this.cookieService.get('user'));
    return this.http.get<User | undefined>(`${this.baseUrl}/users/${user.id}`).pipe(
      tap( user => {if (user) this.login(user)} ),
      map( user => !!user ),
      catchError( err => of(false) )
    );
  }

  /**
   * Method to get the current session of the authenticated user
   * @returns The current session of the authenticated user or undefined if there is no session
   */
  get currentSession(): User | undefined {
    if (!this.activeSession) return undefined;
    return structuredClone(this.activeSession);
  }
}
