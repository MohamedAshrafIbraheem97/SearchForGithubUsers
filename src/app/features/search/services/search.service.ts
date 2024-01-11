import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIs } from '../../../core/apis/endpoints';
import { SharedResponse, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * get list of users from backend
   * @param userName to be sent to the api to search for matches
   * @returns
   */
  getUsersByUsername(userName: string): Observable<SharedResponse<User>> {
    return this._httpClient.get<SharedResponse<User>>(
      APIs.users.searchForUsers + userName
    );
  }
}
