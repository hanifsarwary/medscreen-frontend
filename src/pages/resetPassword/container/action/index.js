import { resetPasswordConstants } from 'pages/resetPassword/constants';
import { sendEmailForResetPassword, resetPassword } from 'services';
import { loaderConstants } from 'components/loaders/constants';

export const sendEmailForResetPasswordAction = (data, history) => {
  return (dispatch) => {
    sendEmailForResetPassword(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: resetPasswordConstants.RESET_PASSWORD_EMAIL_SUCCESS,
            status: response.status,
          })
        );
      })
      .catch((error) => {
        dispatch({
          type: resetPasswordConstants.RESET_PASSWORD_EMAIL_FAILURE,
          error: error.response.data,
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
      })
      .catch((error) => {
        dispatch({
          type: resetPasswordConstants.REST_Password_FAILURE,
          error: error.response.data,
        });
      });
  };
};

export const changeEmailStatus = (data, history) => {
  return (dispatch) => {
    dispatch({
      type: resetPasswordConstants.REST_Password_SUCCESS,
      status: data,
    });
    history.push('/login');
    dispatch({ type: loaderConstants.LOAD_END });
  };
};

export const changePasswordStatus = (data, history) => {
  return (dispatch) => {
    dispatch({
      type: resetPasswordConstants.REST_Password_SUCCESS,
      status: data,
    });
    history.push('/login');
    dispatch({ type: loaderConstants.LOAD_END });
  };
};
