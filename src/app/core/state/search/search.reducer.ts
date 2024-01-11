import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/features/search/models/user.model';
import * as SearchActions from './search.action';

export interface SearchState {
  users: User[];
  error: string | null;
  loading: boolean;
}

const initialState: SearchState = {
  users: [],
  error: null,
  loading: false,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchUsers, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),
  on(SearchActions.searchUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    error: null,
    loading: false,
  })),
  on(SearchActions.searchUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
