import axios from 'axios';

import { DOMAIN, LOCAL_DOMAIN, USERS_ENDPOINTS } from 'config';

export const signUpUser = (data = {}) => {
	let url = DOMAIN + USERS_ENDPOINTS.USERS_LIST_CREATE;

	return axios.post(url, data);
};

export const loginUser = (data = {}) => {
	let url = DOMAIN + USERS_ENDPOINTS.USER_LOGIN;

	return axios.post(url, data);
};

export const refreshToken = () => {
	let url = DOMAIN + USERS_ENDPOINTS;
	let refresh = localStorage.getItem('refresh')
	let data = {
		refresh
	}
	return axios.post(url);
}

export const validatePasswordResetToken = (data = {}) => {
	let url = DOMAIN + USERS_ENDPOINTS.PASSWORD_RESET_TOKEN_VALIDATE;

	return axios.post(url, data);
};
