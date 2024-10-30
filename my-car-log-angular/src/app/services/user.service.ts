import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserDetailsModel } from '../models/user/userDetails.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<UserDetailsModel> {
    const userId = localStorage.getItem('id');
    return this.http.get<UserDetailsModel>(`${this.url}/user/${userId}`);
  }
}
