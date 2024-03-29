import { appointmentConstants } from 'pages/appointments/constants';
import { loaderConstants } from 'components/loaders/constants';
import {
  updatePaymentStatus,
  getTimeSlots,
  getTests,
  getCurrentAppointments,
  getPastAppointments,
  createAppointment,
  createAppointmentPayment,
  cancelCurrentAppointments,
} from 'services';

export const getTestsAction = () => {
  return (dispatch) => {
    // dispatch({ type: loaderConstants.LOAD_START });
    getTests()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: appointmentConstants.GET_TESTS_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: appointmentConstants.GET_TESTS_FAILURE,
          error: error.message,
        });
      });
  };
};

export const getTimeSlotsAction = (date) => {
  return (dispatch) => {
    // dispatch({ type: loaderConstants.LOAD_START });
    getTimeSlots(date)
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: appointmentConstants.GET_TIMESLOTS_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        dispatch({
          type: appointmentConstants.GET_TIMESLOTS_FAILURE,
          error: error.message,
        });
      });
  };
};

export const getCurrentAppointmentsAction = () => {
  return (dispatch) => {
    // dispatch({ type: loaderConstants.LOAD_START });
    getCurrentAppointments()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: appointmentConstants.GET_CURRENT_APPOINTMENTS_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        dispatch({
          type: appointmentConstants.GET_CURRENT_APPOINTMENTS_FAILURE,
          error: error.message,
        });
      });
  };
};

export const getPastAppointmentsAction = () => {
  return (dispatch) => {
    // dispatch({ type: loaderConstants.LOAD_START });
    getPastAppointments()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: appointmentConstants.GET_PAST_APPOINTMENTS_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        dispatch({
          type: appointmentConstants.GET_PAST_APPOINTMENTS_FAILURE,
          error: error.message,
        });
      });
  };
};

export const createAppointmentAction = (data, history) => {
  return (dispatch) => {
    createAppointment(data)
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
        debugger;
        dispatch({
          type: appointmentConstants.CREATE_APPOINTMENT_FAIURE,
          error: error.message,
        });
      });
  };
};

export const updateAppointmentPaymentStatus = (data, history) => {
  return (dispatch) => {
    updatePaymentStatus(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: appointmentConstants.UPDATE_APPOINTMENT_SUCCESS,
            appointment_status: true,
          })
        );
        history.push('/appointments');
      })
      .catch((error) => {
        Promise.resolve(
          dispatch({
            type: appointmentConstants.UPDATE_APPOINTMENT_FAIURE,
            error: error.response.data.error[0],
          })
        );
      });
  };
};

export const closeAppointmentDrawer = (data, history) => {
  return (dispatch) => {
    dispatch({
      type: appointmentConstants.UPDATE_APPOINTMENT_SUCCESS,
      appointment_status: false,
    });
  };
};

export const cancelCurrentAppointmentsAction = (id, history) => {
  return (dispatch) => {
    cancelCurrentAppointments(id)
      .then((response) => {
        dispatch({ type: loaderConstants.LOAD_END });
        history.push('/appointments');
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        dispatch({
          type: appointmentConstants.GET_PAST_APPOINTMENTS_FAILURE,
          error: error.message,
        });
      });
  };
};

export const storeAppointmentAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: appointmentConstants.STORE_APPOINTMENT,
      data,
    });
  };
};

export const createPaymentAction = (data, history) => {
  return (dispatch) => {
    dispatch({ type: loaderConstants.LOAD_START });
    createAppointmentPayment(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: appointmentConstants.CREATE_APPOINTMENT_SUCCESS,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
        // history.push('/appointments');
      })
      .catch((error) => {
        dispatch({
          type: appointmentConstants.CREATE_APPOINTMENT_FAIURE,
          error: error.message,
        });
        dispatch({ type: loaderConstants.LOAD_END });
      });
  };
};
