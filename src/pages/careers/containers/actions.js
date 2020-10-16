import { careersConstants } from 'pages/careers/constants';
import { loaderConstants } from 'components/loaders/constants';
import { getCareersList, getWhoWeAreDescription, applyForJob } from 'services';

export const getCareerListAction = () => {
  return (dispatch) => {
    getCareersList()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: careersConstants.GET_CREERS_LIST_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: careersConstants.GET_CREERS_LIST_FAILURE,
          error: error.message,
        });
      });
  };
};

export const whoWeAreDescriptionAction = () => {
  return (dispatch) => {
    getWhoWeAreDescription()
      .then((response) => {
        let data = response.data.results;
        Promise.resolve(
          dispatch({
            type: careersConstants.GET_DESCRIPTION_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: careersConstants.GET_DESCRIPTION_FAILURE,
          error: error.message,
        });
      });
  };
};

export const applyForJobAction = (data, history) => {
  return (dispatch) => {
    applyForJob(data)
      .then((response) => {
        Promise.resolve(
          dispatch({
            type: careersConstants.APPLY_FOR_JOB_SUCCESS,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
        history.push('/');
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: careersConstants.APPLY_FOR_JOB_FAIURE,
          error: error.message,
        });
      });
  };
};