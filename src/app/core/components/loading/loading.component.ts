import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoadingResults } from '../../state/search/search.selectors';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(public store: Store) {}
  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoadingResults);
  }
}
