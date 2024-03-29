import axios from 'axios';

import { LOCAL_DOMAIN, APPOINTMENTS_ENDPOINTS } from 'config';

export const getTimeSlots = (date) => {
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.GET_TIME_SLOTS + '?date=' + date;
  // let token = localStorage.getItem('access_token');

  const requestOptions = {
    method: 'GET',
    // headers: {"Authorization" : `Bearer ${token}`},
    url,
  };
  return axios(requestOptions);
};

export const getTests = () => {
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.GET_CATEGORY;
  const requestOptions = {
    method: 'GET',
    url,
  };
  return axios(requestOptions);
};

export const getCurrentAppointments = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let token = localStorage.getItem('access_token');
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_LIST_GET + '?user=' + user.username + '&active=true';
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
    url,
  };
  return axios(requestOptions);
};

export const cancelCurrentAppointments = (id) => {
  // let user = JSON.parse(localStorage.getItem('user'));
  let token = localStorage.getItem('access_token');
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_CANCEL + id + '/';
  const requestOptions = {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
    url,
  };
  return axios(requestOptions);
};

export const getPastAppointments = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let token = localStorage.getItem('access_token');
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_LIST_GET + '?user=' + user.username;
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
    url,
  };
  return axios(requestOptions);
};

export const createAppointment = (data = {}) => {
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_LIST_CREATE;
  let token = localStorage.getItem('access_token');
  let user = JSON.parse(localStorage.getItem('user'));
  data.status = 'pending';
  data.user = user.id;
  const requestOptions = {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    url,
    data,
  };

  return axios(requestOptions);
};

export const updatePaymentStatus = (data = {}) => {
  let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_UPDATE_STATUS + data.appointment_id + '/';
  let token = localStorage.getItem('access_token');
  let user = JSON.parse(localStorage.getItem('user'));
  data.user = user.id;
  delete data.appointment_id;
  const requestOptions = {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    url,
    data,
  };

  return axios(requestOptions);
};

export const createAppointmentPayment = (data = {}) => {
  let url = 'https://connect.squareupsandbox.com/v2/payments';
  let token = 'EAAAEMDxbwtU-tvp8Evfo7Yy3yEffkF3DhJQbTFVC93GK307e3CObohIckEqLnCA';
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    url,
    data,
  };

  return axios(requestOptions);
};
