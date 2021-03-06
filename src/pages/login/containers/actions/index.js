import { authConstants } from 'pages/login/constants';
import { loaderConstants } from 'components/loaders/constants';
import { appointmentConstants } from 'pages/appointments/constants';
import { loginUser, getTests, loginUserViaEMail, createAppointment } from 'services';

export const loginUserAction = (data = {}, history) => {
  return (dispatch) => {
    let remember_me = data.remember_me;
    delete data.remember_me;
    loginUser(data)
      .then((response) => {
        let data = response.data;
        Promise.resolve(
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            access_token: data.access,
            refresh_token: data.refresh,
            user: data.user,
            remember_me,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
        history.push('/appointments');
      })
      .catch((error) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          error: error.response.data,
        });
      });
  };
};

export const loginUserActionWithAppointment = (data = {}, history, appointment = {}) => {
  return (dispatch) => {
    let remember_me = data.remember_me;
    delete data.remember_me;
    loginUser(data)
      .then((response) => {
        let data = response.data;
        Promise.resolve(
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            access_token: data.access,
            refresh_token: data.refresh,
            user: data.user,
            remember_me,
          })
        );
        createAppointment(appointment)
          .then((response) => {
            Promise.resolve(
              dispatch({
                type: appointmentConstants.CREATE_APPOINTMENT_SUCCESS,
              })
            );
            dispatch({ type: loaderConstants.LOAD_END });
            history.push('/appointments');
          })
          .catch((error) => {
            dispatch({ type: loaderConstants.LOAD_END });
            if (error.message) {
              history.push('/appointments');
            } else {
              dispatch({
                type: appointmentConstants.CREATE_APPOINTMENT_FAIURE,
                error: error.message,
              });
            }
          });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          error: error.message,
        });
      });
  };
};

export const loginUserViaEmailAction = (data, history) => {
  return (dispatch) => {
    loginUserViaEMail(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: authConstants.LOGIN_VIA_EMAIL_SUCCESS,
            status: true,
          })
        );
      })
      .catch((error) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          error: error.message,
        });
      });
  };
};

export const logoutUserAction = (history) => {
  return (dispatch) => {
    dispatch({ type: loaderConstants.LOAD_END });
    dispatch({
      type: authConstants.LOGOUT,
    });
    window.location.reload();
  };
};

export const refreshLoginFromLocalStorageAction = () => {
  return (dispatch) => {
    dispatch({
      type: authConstants.REFRESH_LOGIN_STATE,
    });
  };
};

export const callService = () => {
  return (dispatch) => {
    getTests().then((res) => {
      if (res) {
        localStorage.setItem('services', JSON.stringify(res.data.results));
        Promise.resolve(
          dispatch({
            type: authConstants.SERVICE,
            service: res.data.results,
          })
        );
      }
    });
  };
};
