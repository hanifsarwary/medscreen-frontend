import { registerUserConstants } from 'pages/register/constants';
import { loaderConstants } from 'components/loaders/constants';
import { signUpUser } from 'services';

export const registerUserAction = (data = {}, history) => {
	return dispatch => {
		signUpUser(data)
			.then(response => {
				Promise.resolve(
					dispatch({
						type: registerUserConstants.REGISTER_SUCCESS,
						success: true
					})
				);
			})
			.catch((error) => {
				dispatch({
					type: registerUserConstants.REGISTER_FAILURE,
					error: error.response.data,
				});
			});
	};
};
