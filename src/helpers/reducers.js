import { combineReducers } from 'redux';

import { authReducer } from 'pages/login/containers';
import { registerReducer } from 'pages/register/containers';
import { loaderReducer } from 'components/loaders/components';
import { appointmentsReducer } from 'pages/appointments/containers/reducers';
import { mediaReducer } from 'pages/home/containers/reducers';
import { testReducer } from 'pages/labServices/containers/reducers';

export const rootReducer = combineReducers({
	USER_AUTH: authReducer,
	USER_REGISTER: registerReducer,
	LOADER: loaderReducer,
	APPOINTMENTS: appointmentsReducer,
	MEDIA: mediaReducer,
	TEST: testReducer
	
});
