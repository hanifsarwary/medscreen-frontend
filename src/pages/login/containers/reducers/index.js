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
		case authConstants.SERVICE:
			return {
				...state,
				error: null,
				service: action.service
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
		case authConstants.REFRESH_LOGIN_STATE:
			let access_token = localStorage.getItem('access_token');
			let refresh_token = localStorage.getItem('refresh_token');
			let user = JSON.parse(localStorage.getItem('user', {}));
			return {
				...state,
				error: null,
				access_token: access_token,
				refresh_token: refresh_token,
				user: user,
			};
		default:
			return state;
	}
};
