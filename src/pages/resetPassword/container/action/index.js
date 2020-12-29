import { resetPasswordConstants } from 'pages/resetPassword/constants';
import { sendEmailForResetPassword, resetPassword } from 'services';

export const sendEmailForResetPasswordAction = (data, history) => {
  return (dispatch) => {
    sendEmailForResetPassword(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: resetPasswordConstants.REST_Password_EMAIL_SUCCESS,
            status: response.status,
          })
        );
        history.push('/login');
      })
      .catch((error) => {
        dispatch({
          type: resetPasswordConstants.REST_Password_EMAIL_FAILURE,
          error: error.response.status,
        });
      });
  };
};

export const resetPasswordAction = (data, history) => {
  return (dispatch) => {
    resetPassword(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: resetPasswordConstants.REST_Password_SUCCESS,
            status: response.status,
          })
        );
        history.push('/login');
      })
      .catch((error) => {
        dispatch({
          type: resetPasswordConstants.REST_Password_FAILURE,
          error: error.response.status,
        });
      });
  };
};
