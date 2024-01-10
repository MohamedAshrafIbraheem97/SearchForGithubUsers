import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIs } from '../apis/endpoints';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  constructor(private _httpClient: HttpClient) {}

  getUsersByUsername(userName: string): Observable<any> {
    return this._httpClient.get(APIs.users + userName);
  }
}
