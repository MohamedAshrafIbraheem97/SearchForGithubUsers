import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private apiCalls = 0;
  private _isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  constructor() {}

  showLoader() {
    if (this.apiCalls === 0) {
      this._isLoading.next(true);
    }
    this.apiCalls++;
  }

  hideLoader() {
    this.apiCalls--;
    if (this.apiCalls === 0) {
      this._isLoading.next(false);
    }
  }
}
