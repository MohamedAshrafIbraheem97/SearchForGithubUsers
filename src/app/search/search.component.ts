import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SharedResponse, User } from '../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  constructor(
    private _searchService: SearchService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // init the form
    this.searchForm = this._formBuilder.group({
      searchInput: ['', Validators.required],
    });

    // keep listing for search input changes
    this.onSearch();
  }

  /**
   * keeps listing for changes on the search input and send the data after 300 millisecond of not entering data
   * and only make a call if the username is changed to get users
   */
  onSearch() {
    this.searchForm
      .get('searchInput')
      ?.valueChanges.pipe(debounceTime(301), distinctUntilChanged())
      .subscribe((userName: string) => {
        if (userName) {
          // only call the api if there's a userName
          this.getUsers(userName);
        }
      });
  }

  /**
   * get a list of users that inlcudes the sent username
   * @param username to be searched for
   */
  getUsers(username: string) {
    this._searchService
      .getUsersByUsername(username)
      .subscribe((res: SharedResponse<User>) => {
        this._searchService.usersList = res;
      });
  }
}
