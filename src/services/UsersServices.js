import axios from 'axios';

import { LOCAL_DOMAIN, USERS_ENDPOINTS } from 'config';

export const signUpUser = (data = {}) => {
  let url = LOCAL_DOMAIN + USERS_ENDPOINTS.USERS_LIST_CREATE;

  return axios.post(url, data);
};

export const loginUserViaEMail = (data) => {
  let url = LOCAL_DOMAIN + USERS_ENDPOINTS.USER_LOGIN_VIA_EMAIL + data;
  return axios.get(url);
};

export const loginUser = (data = {}) => {
  let url = LOCAL_DOMAIN + USERS_ENDPOINTS.USER_LOGIN;
  return axios.post(url, data);
};

export const refreshToken = () => {
  let url = LOCAL_DOMAIN + USERS_ENDPOINTS;
  let refresh = localStorage.getItem('refresh');
  let data = {
    refresh,
  };
  return axios.post(url, data);
};

export const validatePasswordResetToken = (data = {}) => {
  let url = LOCAL_DOMAIN + USERS_ENDPOINTS.PASSWORD_RESET_TOKEN_VALIDATE;

  return axios.post(url, data);
};
