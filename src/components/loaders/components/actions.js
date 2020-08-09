import { loaderConstants } from 'components/loaders/constants';

export const loaderOpenAction = () => {
	return dispatch => {
		dispatch({
			type: loaderConstants.LOAD_START,
		});
	};
};

export const loaderCloseAction = () => {
	return dispatch => {
		dispatch({
			type: loaderConstants.LOAD_END,
		});
	};
};
