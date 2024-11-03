import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginModel } from '../../models/user/login.model';
import { UserAuth } from '../../models/user/userAuth.model';
import { RegistrationDataModel } from '../../models/user/registrationData.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  login(login: LoginModel): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.url}/auth/login`, login).pipe(
      tap((userAuth) => {
        this.setToken(userAuth.token),
          this.setUsername(userAuth.username),
          this.setUserId(userAuth.id);
        this.loggedIn.next(true);
      })
    );
  }

  signUp(registrationData: RegistrationDataModel): Observable<any> {
    return this.http.post(`${this.url}/auth/register`, registrationData);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    this.router.navigate(['/home']);
    this.loggedIn.next(false);
  }

  updatePassword(passwords: any): Observable<any> {
    return this.http.put<any>(`${this.url}`, {});
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private setUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  private setUserId(userId: number): void {
    localStorage.setItem('id', userId.toString());
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getUserId(): string | null {
    return localStorage.getItem('id');
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
