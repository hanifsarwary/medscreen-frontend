import { appointmentConstants } from 'pages/appointments/constants';

const initialState = {
  tests: [],
  time_slots: [],
  current_appointments: [],
  past_appointments: [],
  store_appointment: [],
  appointment_status: false,
  error: null,
  loader: true,
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
    case appointmentConstants.LOAD_START:
      return {
        ...state,
        loader: action.loader,
      };
    case appointmentConstants.LOAD_END:
      return {
        ...state,
        loader: action.loader,
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
    case appointmentConstants.UPDATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        error: null,
        // loader: action.loader,
        appointment_status: action.appointment_status,
      };
    case appointmentConstants.UPDATE_APPOINTMENT_FAIURE:
      return {
        ...state,
        error: action.error,
        // loader: action.loader,
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
