import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';
import { UserDetailsModel } from '../models/user/user-details.model';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user details', (done) => {
    const userId = '123';
    const mockUserDetails = { username: 'MockUserName' } as UserDetailsModel;

    spyOn(localStorage, 'getItem').and.returnValue(userId);
    spyOn(service.updatedUserDetails, 'next');

    service.getUserDetails().subscribe((userDetails) => {
      expect(userDetails).toEqual(mockUserDetails);
      done();
    });

    const req = httpTestingController.expectOne(`${apiUrl}/user/${userId}`);
    req.flush(mockUserDetails);

    expect(req.request.method).toBe('GET');
    expect(service.userDetails).toEqual(mockUserDetails);
    expect(service.updatedUserDetails.next).toHaveBeenCalledWith('');
  });
});
