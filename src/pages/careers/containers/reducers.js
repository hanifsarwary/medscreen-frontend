import { careersConstants } from 'pages/careers/constants';

const initialState = {
  careersLits: [],
  aboutUsDescription: []
};

export const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    case careersConstants.GET_CREERS_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        careersLits: action.data,
      };
    case careersConstants.GET_CREERS_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case careersConstants.GET_DESCRIPTION_SUCCESS:
      return {
        ...state,
        error: null,
        aboutUsDescription: action.data,
      };
    case careersConstants.GET_DESCRIPTION_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case careersConstants.APPLY_FOR_JOB_SUCCESS:
      return {
        ...state,
        error: null
      };
    case careersConstants.APPLY_FOR_JOB_FAIURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
