import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, tap } from 'rxjs';
import { UserDetailsModel } from '../models/user/user-details.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.apiUrl;

  updatedUserDetails = new Subject();

  //mozna tego uzyc jako wartosc wspolna pomiedzy komponentami dziecka
  userDetails = {};

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<UserDetailsModel> {
    const userId = localStorage.getItem('id');
    return this.http.get<UserDetailsModel>(`${this.url}/user/${userId}`).pipe(
      tap((res) => {
        this.userDetails = res;
        this.updatedUserDetails.next('');
      })
    );
  }

  updateUserDetails(
    newUserDetails: UserDetailsModel
  ): Observable<UserDetailsModel> {
    const userId = localStorage.getItem('id');
    return this.http.put<UserDetailsModel>(
      `${this.url}/user/${userId}`,
      newUserDetails
    );
  }
}
