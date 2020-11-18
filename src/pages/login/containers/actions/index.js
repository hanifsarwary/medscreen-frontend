import { authConstants } from 'pages/login/constants';
import { loaderConstants } from 'components/loaders/constants';
import { loginUser, getTests, loginUserViaEMail } from 'services';

export const loginUserAction = (data = {}, history) => {
	return dispatch => {
		let remember_me = data.remember_me;
		delete data.remember_me;
		loginUser(data)
			.then(response => {
				let data = response.data;
				Promise.resolve(
					dispatch({
						type: authConstants.LOGIN_SUCCESS,
						access_token: data.access,
						refresh_token: data.refresh,
						user: data.user,
						remember_me,
					})
				);
				dispatch({ type: loaderConstants.LOAD_END });
				let next_url = history.location.pathname.split('=')[1];
				if (next_url) history.push(next_url);
				else history.push('/');
			})
			.catch(error => {
				dispatch({ type: loaderConstants.LOAD_END });
				dispatch({
					type: authConstants.LOGIN_FAILURE,
					error: error.message,
				});
			});
	};
};

export const loginUserViaEmailAction = (data, history) => {
	return dispatch => {
		loginUserViaEMail(data)
			.then(response => {
				let data = response.data;
				console.log(data , '=========================');
				Promise.resolve(
					dispatch({
						type: authConstants.LOGIN_SUCCESS,
						access_token: data.access,
						refresh_token: data.refresh,
						user: data.user,
					})
				);
				dispatch({ type: loaderConstants.LOAD_END });
				let next_url = history.location.pathname.split('=')[1];
				if (next_url) history.push(next_url);
				else history.push('/');
			})
			.catch(error => {
				dispatch({ type: loaderConstants.LOAD_END });
				dispatch({
					type: authConstants.LOGIN_FAILURE,
					error: error.message,
				});
			});
	};
};

export const logoutUserAction = history => {
	return dispatch => {
		dispatch({
			type: authConstants.LOGOUT,
		});
		history.push('/');
	};
};

export const refreshLoginFromLocalStorageAction = () => {
	return dispatch => {
		dispatch({
			type: authConstants.REFRESH_LOGIN_STATE,
		});
	};
};

export const callService = () => {
	return dispatch => {
		getTests().then(res => {
			localStorage.setItem('services', JSON.stringify(res.data.results))
			Promise.resolve(
				dispatch({
					type: authConstants.SERVICE,
					service: res.data.results
				})
			)
		})
	};
}
