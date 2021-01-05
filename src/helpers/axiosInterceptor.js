import axios from 'axios';

if (localStorage.getItem('access_token')) {
  axios.defaults.baseURL = 'https://medscreenlabs-backend.herokuapp.com/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status !== 401) {
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        window.location.reload(false);
        return Promise.reject(error);
      }

      const tokens = {
        refresh: localStorage.getItem('refresh_token'),
      };
      return axios
        .post(`api/refresh/token/`, tokens)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
          error.hasRefreshedToken = true;
          return Promise.reject(error);
        })
        .catch(() => {
          return Promise.reject(error);
        });
    }
  );
}

// export default () => {
//   const baseURL = 'https://medscreenlabs-backend.herokuapp.com/';
//   let headers = {};
//   const token = localStorage.getItem('access_token');
//   const refresh_token = localStorage.getItem('refresh_token');

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }
//   const axiosInstance = axios.create({
//     baseURL: baseURL,
//     headers,
//   });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     new Promise((resolve, reject) => {
//       resolve(response);
//     });
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       return Promise.reject(error);
//     }

//     return axios
//       .post('/api/token/refresh_token', {
//         refresh: refresh_token,
//       })
//       .then((response) => {
//         localStorage.setItem('refresh_token', response.refresh_token);
//         localStorage.setItem('access_token', response.access_token);
//         error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
//         return axios(error.response.config);
//       })
//       .catch((error) => {
//         localStorage.removeItem('refresh_token');
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('user');
//         window.location.reload(false);
//         return Promise.reject(error);
//       });
//   }
// );

//   axiosInstance();
// };
