import { Testing } from 'pages/labServices/constants';

const initialState = {
  testsById: [],
  error: null,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case Testing.GET_TESTS_SUCCESS:
      return {
        ...state,
        error: null,
        testsById: action.data,
      };
    case Testing.GET_TESTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
