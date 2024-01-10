import { environment } from 'src/environments/environment';

export const APIs = {
  users: {
    singleUser: environment.baseUrl + '/users/',
    searchForUsers: environment.baseUrl + '/search/users?q=',
  },
};
