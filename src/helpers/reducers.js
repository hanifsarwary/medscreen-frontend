import { combineReducers } from 'redux';

import { authReducer } from 'pages/login/containers';
import { registerReducer } from 'pages/register/containers';
import { loaderReducer } from 'components/loaders/components';
import { appointmentsReducer } from 'pages/appointments/containers/reducers';
import { careersReducer } from 'pages/careers/containers/reducers';
import { mediaReducer } from 'pages/home/containers/reducers';
import { testReducer } from 'pages/labServices/containers/reducers';
import { passwordResetReducer } from 'pages/resetPassword/container/reducer';

export const rootReducer = combineReducers({
  USER_AUTH: authReducer,
  RESET_PASSWORD: passwordResetReducer,
  USER_REGISTER: registerReducer,
  LOADER: loaderReducer,
  APPOINTMENTS: appointmentsReducer,
  CAREERS: careersReducer,
  MEDIA: mediaReducer,
  TEST: testReducer,
});
