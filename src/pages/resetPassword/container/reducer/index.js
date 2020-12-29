/* eslint-disable no-duplicate-case */
import { resetPasswordConstants } from 'pages/resetPassword/constants';

const initialRegisterUserState = {
  status: null,
  success: false,
  error: null,
};

export const passwordResetReducer = (state = initialRegisterUserState, action) => {
  switch (action.type) {
    case resetPasswordConstants.REST_Password_EMAIL_SUCCESS:
      return {
        ...state,
        status: action.status,
        error: null,
      };
    case resetPasswordConstants.Reset_Password_EMAIL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case resetPasswordConstants.REST_Password_SUCCESS:
      return {
        ...state,
        status: action.status,
        error: null,
      };
    case resetPasswordConstants.REST_Password_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
