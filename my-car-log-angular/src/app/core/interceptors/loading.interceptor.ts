// loading.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ProgressBarService } from '../layout/progress-bar/progress-bar.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private progressBarService: ProgressBarService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.progressBarService.showLoading();

    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            this.progressBarService.hideLoading();
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this.progressBarService.hideLoading();
          }
        },
      }),
      finalize(() => {
        this.progressBarService.hideLoading();
      })
    );
  }
}
