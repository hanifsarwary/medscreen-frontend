const DOMAIN = 'https://medscreenlabs-backend.herokuapp.com/';

const LOCAL_DOMAIN = 'http://127.0.0.1:8000/';
const USERS_ENDPOINTS = {
	USERS_LIST_CREATE: 'api/v1/users/',
	USER_LOGIN: 'api/token/',
	PASSWORD_RESET_TOKEN_VALIDATE: 'api/password_reset/validate_token/',
};
const APPOINTMENTS_ENDPOINTS = {
	APPOINTMENTS_LIST_CREATE: 'api/v1/appointments/',
	GET_TIME_SLOTS: 'api/v1/time-slots/',
	GET_TESTS: 'api/v1/tests/',
};
const MEDIA_ENDPOINTS = {
	GET_MEDIA: 'api/v1/media/',
	GET_EDITABLE_TEXTS: 'api/v1/editable_texts/',
};

export { DOMAIN, LOCAL_DOMAIN, USERS_ENDPOINTS, APPOINTMENTS_ENDPOINTS, MEDIA_ENDPOINTS };
