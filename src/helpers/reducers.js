import { combineReducers } from 'redux';

import { authReducer } from 'pages/login/containers';
import { registerReducer } from 'pages/register/containers';
import { loaderReducer } from 'components/loaders/components';

export const rootReducer = combineReducers({
  USER_AUTH: authReducer,
  USER_REGISTER: registerReducer,
  LOADER: loaderReducer,
});
