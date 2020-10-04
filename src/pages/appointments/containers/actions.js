import { appointmentConstants } from 'pages/appointments/constants';
import { loaderConstants } from 'components/loaders/constants';
import { updatePaymentStatus, getTimeSlots, getTests, getCurrentAppointments, getPastAppointments, createAppointment } from 'services';

export const getTestsAction = () => {
  return (dispatch) => {
    // dispatch({ type: loaderConstants.LOAD_START });
    getTests()
      .then((response) => {
        let res = response.data.results;
        let data = res.map(item =>
          item
            ? {
                label: item.name,
                value: item.id,
                options: item.panel.map(sub_item => {
                  return sub_item
                  ? {
                    label: sub_item.panel_name,
                    value: sub_item.id,
                    price: sub_item.price,
                    parent_label: item.name,
                    parent_id: item.id,
                    panel_test: sub_item.tests
                  }
                  : sub_item
                })
              }
            : item
        );
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
