import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { APIs } from '../apis/endpoints';
import { SharedResponse, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _usersList = new BehaviorSubject<SharedResponse<User>>(null!);
  // Getter for user list
  get usersList$() {
    return this._usersList.asObservable();
  }

  // Setter for user list
  set usersList(value: SharedResponse<User>) {
    this._usersList.next(value);
  }

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
