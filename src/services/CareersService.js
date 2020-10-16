import axios from 'axios';

import { DOMAIN, LOCAL_DOMAIN, CAREERS_ENDPOINTS } from 'config';

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
