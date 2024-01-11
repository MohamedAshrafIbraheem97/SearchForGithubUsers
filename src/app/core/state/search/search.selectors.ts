import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

// to handle search state
export const selectSearchResults = createSelector(
  selectSearchState,
  (state) => state.users
);

// to handle loading state
export const selectLoadingResults = createSelector(
  selectSearchState,
  (state) => state.loading
);
