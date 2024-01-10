import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { SharedResponse, User } from '../models/user.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  sharedResponse: SharedResponse<User> = {
    incomplete_results: false,
    items: [],
    total_count: 0,
  };
  constructor(private _searchService: SearchService) {}
  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this._searchService.usersList$.subscribe(
      (res) => (this.sharedResponse = res)
    );
  }
}
