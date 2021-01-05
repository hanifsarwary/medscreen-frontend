import axios from 'axios';

import { LOCAL_DOMAIN, MEDIA_ENDPOINTS } from 'config';

export const getMedia = () => {
  let url = LOCAL_DOMAIN + MEDIA_ENDPOINTS.GET_MEDIA;

  const requestOptions = {
    method: 'GET',
    url,
  };
  return axios(requestOptions);
};

export const getEditableTexts = () => {
  let url = LOCAL_DOMAIN + MEDIA_ENDPOINTS.GET_EDITABLE_TEXTS;

  const requestOptions = {
    method: 'GET',
    url,
  };
  return axios(requestOptions);
};
