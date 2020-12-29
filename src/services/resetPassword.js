import axios from 'axios';

import { LOCAL_DOMAIN, RESET_PASSWORD } from 'config';

export const sendEmailForResetPassword = (data = {}) => {
  let url = LOCAL_DOMAIN + RESET_PASSWORD.SEND_EMAIL;

  return axios.post(url, data);
};

export const resetPassword = (data = {}) => {
  let url = LOCAL_DOMAIN + RESET_PASSWORD.PASSWORD_RESET;

  return axios.post(url, data);
};
