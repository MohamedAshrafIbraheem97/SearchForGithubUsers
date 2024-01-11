import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { searchUsersFailure } from '../state/search/search.action';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  // inject toaster service to the constructor
  constructor(private toastr: ToastrService, private _store: Store) {}

  // intercept any request
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        // intercept requests and catch errors that might happen
        if (error.status === 401) {
          this.toastr.error('Unauthorized!');
        } else if (error.status === 403) {
          this.toastr.error('Forbidden! Rate limit exceeded');
        } else {
          // catch any error that might happen
          this.toastr.error(`An error happened with code ${error.status}`);
        }
        this._store.dispatch(
          searchUsersFailure({
            error: `Error happened with code ${error.status}`,
          })
        );
        return of(error); // return the error as we might want to do something with it later
      })
    );
  }
}
