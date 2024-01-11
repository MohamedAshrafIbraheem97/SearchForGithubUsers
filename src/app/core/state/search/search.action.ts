import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/features/search/models/user.model';

// search action method
export const searchUsers = createAction(
  '[Search] Search Users',
  props<{ username: string }>()
);

// when search successfully returned a result
export const searchUsersSuccess = createAction(
  '[Search] Search Users Success',
  props<{ users: User[] }>()
);

// call when an error happens when searching
export const searchUsersFailure = createAction(
  '[Search] Search Users Failure',
  props<{ error: string }>()
);
