
import axios from "axios";
// import { logout } from "../actions/AuthActions";
// import { NEED_LOGOUT } from "../actions/types";
// import { showError } from "../common";
import { rootStore } from '../store';
// import { API_ENDPOINT_HOME_SERVICE } from '../utils/Config.json'

export const requestConfig = () => {
  axios.interceptors.request.use(
    config => {
      const { user } = rootStore.getState().auth;
      // const { lang } = rootStore.getState().lang;
      const { Authorization } = config.headers;
      const authorization = user
        ? {
          Authorization: `Bearer ${user.accessToken}`
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
    // const needLogout = store.getState().auth.needLogout;
    // if (error.response && error.response.status === 401 && error.config.url !== `${API_ENDPOINT_HOME_SERVICE}auth/signin` && !needLogout) {
    //   store.dispatch({ type: NEED_LOGOUT });
    //   showError(error.message);
    //   store.dispatch(logout());
    // }
    return Promise.reject(error);
  });

}