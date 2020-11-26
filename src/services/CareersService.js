import axios from 'axios';

import { LOCAL_DOMAIN, CAREERS_ENDPOINTS } from 'config';

export const getCareersList = () => {
	let url = LOCAL_DOMAIN + CAREERS_ENDPOINTS.CAREERS_LIST_GET;
    const requestOptions = {
        method: 'GET',
        url
      };
    return axios(requestOptions);
};

export const getWhoWeAreDescription = () => {
	let url = LOCAL_DOMAIN + CAREERS_ENDPOINTS.WHO_WE_ARE_GET;
    const requestOptions = {
        method: 'GET',
        url
      };
    return axios(requestOptions);
}

export const applyForJob = (data = {}) => {
	let url = LOCAL_DOMAIN + CAREERS_ENDPOINTS.APPLY_FOR_JOB;
    const requestOptions = {
        method: 'POST',
        url,
        data
      };

      return axios(requestOptions);
};

export const getUserReview = () => {
	let url = LOCAL_DOMAIN + CAREERS_ENDPOINTS.USER_REVIEW;
    const requestOptions = {
        method: 'GET',
        url
      };

      return axios(requestOptions);
};

export const getbackGroundImage = (param) => {
  let url = LOCAL_DOMAIN + CAREERS_ENDPOINTS.BACKGROUND_IMAGE + `?key=${param}`;
  const requestOptions = {
      method: 'GET',
      url
    };

  return axios(requestOptions);
}