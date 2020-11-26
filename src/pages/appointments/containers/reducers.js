import { appointmentConstants } from 'pages/appointments/constants';

const initialState = {
  tests: [],
  time_slots: [],
  current_appointments: [],
  past_appointments: [],
  store_appointment: [],
  error: null,
};

export const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case appointmentConstants.GET_TESTS_SUCCESS:
      return {
        ...state,
        error: null,
        tests: action.data,
      };
    case appointmentConstants.GET_TESTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case appointmentConstants.GET_TIMESLOTS_SUCCESS:
      return {
        ...state,
        error: null,
        time_slots: action.data,
      };
    case appointmentConstants.GET_TIMESLOTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case appointmentConstants.GET_CURRENT_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        current_appointments: action.data,
      };
    case appointmentConstants.GET_CURRENT_APPOINTMENTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case appointmentConstants.GET_PAST_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        past_appointments: action.data,
      };
    case appointmentConstants.STORE_APPOINTMENT:
      return {
        ...state,
        error: null,
        store_appointment: action.data,
      };
    case appointmentConstants.GET_PAST_APPOINTMENTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
