import { HomeConstants } from 'pages/home/constants';
import { getMedia, getEditableTexts } from 'services';

export const getMediaAction = () => {
  return (dispatch) => {
    getMedia()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: HomeConstants.GET_MEDIA_SUCCESS,
            data,
          })
        );
      })
      .catch((error) => {
        dispatch({
          type: HomeConstants.GET_MEDIA_FAILURE,
          error: error,
        });
      });
  };
};

export const getEditableTextsAction = () => {
  return (dispatch) => {
    getEditableTexts()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: HomeConstants.GET_EDITABLE_TEXTS_SUCCESS,
            data,
          })
        );
      })
      .catch((error) => {
        dispatch({
          type: HomeConstants.GET_EDITABLE_TEXTS_FAILURE,
          error: error.message,
        });
      });
  };
};
