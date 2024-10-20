import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/user/login.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  signIn(login: LoginModel): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, login);
  }
}
