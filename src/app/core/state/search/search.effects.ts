import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SearchActions from './search.action';
import { SearchService } from 'src/app/features/search/services/search.service';

@Injectable()
export class SearchEffects {
  // Effect to handle the searchUsers action
  searchUsers$ = createEffect(() =>
    this._actions$.pipe(
      // Listen for the searchUsers action
      ofType(SearchActions.searchUsers),
      mergeMap((action) =>
        // Call the search service to get users by username
        this._searchService.getUsersByUsername(action.username).pipe(
          map((users) =>
            // modify the response to meet our needs
            SearchActions.searchUsersSuccess({ users: users.items })
          ),
          // Handle any errors that may occur during the API call
          catchError((error) =>
            of(SearchActions.searchUsersFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private _actions$: Actions,
    private _searchService: SearchService
  ) {}
}
