import { loaderConstants } from 'components/loaders/constants';

const initialLoaderState = {
	is_loading: false,
};

export const loaderReducer = (state = initialLoaderState, action) => {
	switch (action.type) {
		case loaderConstants.LOAD_START:
			return {
				...state,
				is_loading: true,
			};
		case loaderConstants.LOAD_END:
			return {
				...state,
				is_loading: false,
			};
		default:
			return state;
	}
};
