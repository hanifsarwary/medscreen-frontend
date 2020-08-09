import { authConstants } from 'pages/login/constants';

const initialAuthState = {
	access_token: null,
	refresh_token: null,
	user: null,
	error: null,
};

export const authReducer = (state = initialAuthState, action) => {
	switch (action.type) {
		case authConstants.LOGIN_SUCCESS:
			localStorage.setItem('access_token', action.access_token);
			localStorage.setItem('refresh_token', action.refresh_token);
			localStorage.setItem('user', JSON.stringify(action.user));
			return {
				...state,
				error: null,
				access_token: action.access_token,
				refresh_token: action.refresh_token,
				user: action.user,
			};
		case authConstants.LOGIN_FAILURE:
			return {
				...state,
				error: action.error,
			};
		case authConstants.LOGOUT:
			localStorage.removeItem('access_token');
			localStorage.removeItem('refresh_token');
			localStorage.removeItem('user');
			return {
				...state,
				error: null,
				access_token: null,
				refresh_token: null,
				user: null,
			};
		default:
			return state;
	}
};
