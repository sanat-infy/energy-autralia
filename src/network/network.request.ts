import axios from 'axios';
import { MethodTypes } from '../constants/method.types';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

instance.interceptors.response.use(
  (response) => {
    console.log(':::::::response1', response);
    return response.data;
  },
  (error) => {
    if (error.response.status === 401 && window.location.pathname !== '/') {
      window.localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

export const request = (method, url, payload?, headers?) => {
  console.log(':::BaseURL', process.env.BASE_URL);
  console.log(':::FullURL', url);
  switch (method) {
    case MethodTypes.GET:
      return instance.get(url);

    case MethodTypes.POST:
      return instance.post(url, payload, { headers });

    case MethodTypes.PUT:
      return instance.put(url, payload, { headers });

    case MethodTypes.PATCH:
      return instance.patch(url, payload, { headers });

    case MethodTypes.DELETE:
      return instance.delete(url, {
        headers: {},
      });
    default:
      return null;
  }
};

export default instance;
