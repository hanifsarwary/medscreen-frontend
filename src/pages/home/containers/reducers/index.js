import { HomeConstants } from 'pages/home/constants';

const initialState = {
  media: [],
  editable_texts: [],
  error: null,
};

export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeConstants.GET_MEDIA_SUCCESS:
      return {
        ...state,
        error: null,
        media: action.data,
      };
    case HomeConstants.GET_MEDIA_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case HomeConstants.GET_EDITABLE_TEXTS_SUCCESS:
      return {
        ...state,
        error: null,
        editable_texts: action.data,
      };
    case HomeConstants.GET_EDITABLE_TEXTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
