
import axios from "axios";

import { rootStore } from '../store';

export const requestConfig = () => {
  axios.interceptors.request.use(
    config => {
      
      const user = rootStore.getState().auth;

      // const { lang } = rootStore.getState().lang;
      const { Authorization } = config.headers;
      const authorization = user
        ? {
          Authorization: `Bearer ${user.token}`
        }
        : Authorization ? { Authorization } : Authorization;
      return {
        ...config,
        headers: {
          // "Accept-Language": lang,
          ...config.headers,
          ...authorization,
        }
      };
    },
    error => {
      Promise.reject(error);
    }
  );
  axios.interceptors.response.use(res => res, (error) => {
   
    return Promise.reject(error);
  });

}