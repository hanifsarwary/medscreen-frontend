const DOMAIN = 'https://medscreenlabs-backend.herokuapp.com/';
const LOCAL_DOMAIN = 'http://localhost:8000/';
const USERS_ENDPOINTS = {
	USERS_LIST_CREATE: '/api/v1/users/',
	USER_LOGIN: 'api/token/',
	PASSWORD_RESET_TOKEN_VALIDATE: 'api/password_reset/validate_token/',
};

export { DOMAIN, LOCAL_DOMAIN, USERS_ENDPOINTS };
