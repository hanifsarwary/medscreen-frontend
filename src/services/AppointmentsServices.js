import axios from 'axios';

import { DOMAIN, LOCAL_DOMAIN, APPOINTMENTS_ENDPOINTS } from 'config';

export const getTimeSlots = (date) => {
	let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.GET_TIME_SLOTS + '?date=' + date;
    let token = localStorage.getItem('access_token')

    const requestOptions = {
        method: 'GET',
        headers: {"Authorization" : `Bearer ${token}`},
        url
      };
    return axios(requestOptions);
};

export const getTests = () => {
	let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.GET_CATEGORY;
    let token = localStorage.getItem('access_token')
    const requestOptions = {
        method: 'GET',
        headers: {"Authorization" : `Bearer ${token}`},
        url
      };
    return axios(requestOptions);
};

export const getCurrentAppointments = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let token = localStorage.getItem('access_token');
	let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_LIST_GET + '?user=' + user.username + '&active=true';
    const requestOptions = {
        method: 'GET',
        headers: {"Authorization" : `Bearer ${token}`},
        url
      };
    return axios(requestOptions);
};

export const getPastAppointments = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let token = localStorage.getItem('access_token');
	let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_LIST_GET + '?user=' + user.username;
    const requestOptions = {
        method: 'GET',
        headers: {"Authorization" : `Bearer ${token}`},
        url
      };
    return axios(requestOptions);
};

export const createAppointment = (data = {}) => {
	let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_LIST_CREATE;
    let token = localStorage.getItem('access_token')
    let user = JSON.parse(localStorage.getItem('user'));
    data.status = 'pending'
    data.user = user.id
    const requestOptions = {
        method: 'POST',
        headers: {"Authorization" : `Bearer ${token}`},
        url,
        data
      };

      return axios(requestOptions);
};

export const updatePaymentStatus = (data = {}) => {
	let url = LOCAL_DOMAIN + APPOINTMENTS_ENDPOINTS.APPOINTMENTS_UPDATE_STATUS;
    let token = localStorage.getItem('access_token')
    let user = JSON.parse(localStorage.getItem('user'));
    data.user = user.id
    const requestOptions = {
        method: 'PATCH',
        headers: {"Authorization" : `Bearer ${token}`},
        url,
        data
      };

      return axios(requestOptions);
};