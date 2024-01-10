import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  // injecting loading service to the constructor
  constructor(private _loadingService: LoadingService) {}

  // intercept any request
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loadingService.showLoader(); // show the loading spinner if a request is send
    return next
      .handle(request)
      .pipe(finalize(() => this._loadingService.hideLoader())); // hide the loading spinner when received a response
  }
}
