import { environment } from 'src/environments/environment';

// apis to be used inside the app
export const APIs = {
  users: {
    singleUser: environment.baseUrl + '/users/',
    searchForUsers: environment.baseUrl + '/search/users?q=',
  },
};
