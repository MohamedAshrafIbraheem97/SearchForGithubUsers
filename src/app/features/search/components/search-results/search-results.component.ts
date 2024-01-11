import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { selectSearchResults } from '../../../../core/state/search/search.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  userList$: Observable<User[]>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    // get users from the store
    this.userList$ = this.store.select(selectSearchResults);
  }
}
