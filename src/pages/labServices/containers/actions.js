import { loaderConstants } from 'components/loaders/constants';
import { Testing } from 'pages/labServices/constants';

export const getTestsByID = (id) => {
    return (dispatch) => {
      // dispatch({ type: loaderConstants.LOAD_START });
      let data = JSON.parse(localStorage.getItem('services')).filter(res => res.id === Number(id))[0]
      dispatch({
        type: Testing.GET_TESTS_SUCCESS,
        data,
      })
      dispatch({ type: loaderConstants.LOAD_END });
    };
};
