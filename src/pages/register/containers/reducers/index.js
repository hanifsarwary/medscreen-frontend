import { registerUserConstants } from 'pages/register/constants';

const initialRegisterUserState = {
	successMsg: false,
	error: null,
};

export const registerReducer = (state = initialRegisterUserState, action) => {
	switch (action.type) {
		case registerUserConstants.REGISTER_SUCCESS:
			return {
				...state,
				successMsg: action.success,
				error: null,
			};
		case registerUserConstants.REGISTER_FAILURE:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};
