const DOMAIN = 'https://medscreenlabs-backend.herokuapp.com/';

const PAYMENT_CREDENTIALS = {
  SAND_BOX_APPLICATION_ID: 'sandbox-sq0idb-aLZmsFDNMH8mnlhisjzeFA',
  SAND_BOX_LOCATION_ID: 'LG93JSK02XFSK',
  PRODUCTION_APPLICATION_ID: 'sq0idp-AkYNakDfFkDTsQaTEm5i1Q',
  PRODUCTION_LOCATION_ID: 'HVWH1VGAYF82G',
};

const LOCAL_DOMAIN = 'https://covid-plasmadonor.com/';
const USERS_ENDPOINTS = {
  USERS_LIST_CREATE: 'api/v1/users/',
  USER_LOGIN: 'api/token/',
  USER_LOGIN_VIA_EMAIL: 'api/v1/users/activate/',
  PASSWORD_RESET_TOKEN_VALIDATE: 'api/password_reset/validate_token/',
};
const APPOINTMENTS_ENDPOINTS = {
  APPOINTMENTS_LIST_GET: 'api/v1/appointments/',
  APPOINTMENTS_LIST_CREATE: 'api/v1/appointments/create/',
  GET_TIME_SLOTS: 'api/v1/time-slots/',
  GET_TESTS: 'api/v1/tests/',
  GET_CATEGORY: 'api/v1/categories/',
  APPOINTMENTS_UPDATE_STATUS: 'api/v1/appointments/update/status/',
  APPOINTMENTS_CANCEL: 'api/v1/appointments/update/status/',
};
const CAREERS_ENDPOINTS = {
  CAREERS_LIST_GET: 'api/v1/careers/',
  WHO_WE_ARE_GET: 'api/v1/who-we-are/',
  APPLY_FOR_JOB: 'api/v1/job-applications/',
  USER_REVIEW: 'api/v1/user-reviews/',
  BACKGROUND_IMAGE: 'api/v1/website-pictures/',
};
const MEDIA_ENDPOINTS = {
  GET_MEDIA: 'api/v1/media/',
  GET_EDITABLE_TEXTS: 'api/v1/editable_texts/',
};

const RESET_PASSWORD = {
  SEND_EMAIL: 'api/password_reset/',
  PASSWORD_RESET: 'api/password_reset/confirm/',
};

export {
  DOMAIN,
  LOCAL_DOMAIN,
  USERS_ENDPOINTS,
  APPOINTMENTS_ENDPOINTS,
  MEDIA_ENDPOINTS,
  CAREERS_ENDPOINTS,
  RESET_PASSWORD,
  PAYMENT_CREDENTIALS,
};
