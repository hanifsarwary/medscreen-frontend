const DOMAIN = 'https://medscreenlabs-backend.herokuapp.com/';

const LOCAL_DOMAIN = 'https://covid-plasmadonor.com/';
const USERS_ENDPOINTS = {
	USERS_LIST_CREATE: 'api/v1/users/',
	USER_LOGIN: 'api/token/',
	PASSWORD_RESET_TOKEN_VALIDATE: 'api/password_reset/validate_token/',
};
const APPOINTMENTS_ENDPOINTS = {
	APPOINTMENTS_LIST_GET: 'api/v1/appointments/',
	APPOINTMENTS_LIST_CREATE: 'api/v1/appointments/create/',
	GET_TIME_SLOTS: 'api/v1/time-slots/',
	GET_TESTS: 'api/v1/tests/',
	GET_CATEGORY: 'api/v1/categories/',
	APPOINTMENTS_UPDATE_STATUS: 'api/v1/appointments/update/status/'
};
const MEDIA_ENDPOINTS = {
	GET_MEDIA: 'api/v1/media/',
	GET_EDITABLE_TEXTS: 'api/v1/editable_texts/',
};

export { DOMAIN, LOCAL_DOMAIN, USERS_ENDPOINTS, APPOINTMENTS_ENDPOINTS, MEDIA_ENDPOINTS };
