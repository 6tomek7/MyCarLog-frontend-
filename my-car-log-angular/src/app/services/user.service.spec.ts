import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { UserDetailsModel } from '../models/user/user-details.model';
import { UpdatingUserDetailsModel } from '../models/user/updating-user-details.model';

describe('UserService', () => {
  const url = environment.apiUrl;
  const userId = '12';
  const userDetailsModel = { username: 'mockUsername' } as UserDetailsModel;

  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user details', (done) => {
    spyOn(localStorage, 'getItem').and.returnValue(userId);
    spyOn(service.updatedUserDetails, 'next');

    service.getUserDetails().subscribe((res) => {
      expect(res).toEqual(userDetailsModel);
      done();
    });

    const req = httpTestingController.expectOne(`${url}/user/${userId}`);
    req.flush(userDetailsModel);

    expect(req.request.method).toBe('GET');
    expect(service.updatedUserDetails.next).toHaveBeenCalledWith('');
  });

  it('should update user details', (done) => {
    const newUserDetailsMock = { gender: 'male' } as UpdatingUserDetailsModel;
    spyOn(localStorage, 'getItem').and.returnValue(userId);

    service.updateUserDetails(newUserDetailsMock).subscribe((res) => {
      expect(res).toEqual(userDetailsModel);
      done();
    });

    const req = httpTestingController.expectOne(`${url}/user/${userId}`);
    req.flush(userDetailsModel);

    expect(req.request.body).toEqual(newUserDetailsMock);
    expect(req.request.method).toBe('PUT');
  });
});
