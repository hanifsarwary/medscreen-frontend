import { careersConstants } from 'pages/careers/constants';
import { loaderConstants } from 'components/loaders/constants';
import { 
    getCareersList, getWhoWeAreDescription,
    getbackGroundImage,
    applyForJob, getTests, getUserReview } from 'services';

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
        let data = response.data.text;
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
            type: careersConstants.GET_APPLY_FOR_JOB_SUCCESS,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
        history.push('/');
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: careersConstants.GET_APPLY_FOR_JOB_FAILURE,
          error: error.message,
        });
      });
  };
};

export const callService = () => {
	return dispatch => {
		getTests().then(res => {
			localStorage.setItem('services', JSON.stringify(res.data.results))
			Promise.resolve(
				dispatch({
					type: careersConstants.SERVICE,
					service: res.data.results
				})
			)
		})
	};
}

export const userReviewAction = () => {
  return (dispatch) => {
    getUserReview()
      .then((response) => {
        let data = response.data.results;

        Promise.resolve(
          dispatch({
            type: careersConstants.GET_REVIEW_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: careersConstants.GET_REVIEW_FAILURE,
          error: error.message,
        });
      });
  };
}

export const backGroundPictureAction = (param) => {
  return (dispatch) => {
    getbackGroundImage(param)
      .then((response) => {
        let data = response.data.results[0].image;
        Promise.resolve(
          dispatch({
            type: careersConstants.GET_PICTURE_SUCCESS,
            data,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        debugger;
        dispatch({
          type: careersConstants.GET_PICTURE_FAILURE,
          error: error.message,
        });
      });
  };
}
