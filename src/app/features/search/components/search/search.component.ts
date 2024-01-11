import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { Store } from '@ngrx/store';
import * as SearchActions from '../../../../core/state/search/search.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private _store: Store, private _formBuilder: FormBuilder) {}

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
          // only call the store if there's a userName
          this._store.dispatch(
            SearchActions.searchUsers({ username: userName })
          );
        }
      });
  }
}
