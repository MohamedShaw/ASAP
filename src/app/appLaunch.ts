import { AppNavigation } from '../navigation';
import { rootStore } from '../store';
// import { checkUpdate } from 'utils/dev';

export const onAppLaunch = () => {
  // console.log("app");

  const { user } = rootStore.getState().auth;
  if (user) {
    // authenticated
    AppNavigation.setRootScreen('home');
  } else {
    //noAuth
    AppNavigation.setRootScreen('intro');
  }

  // if (__DEV__) checkUpdate();
};
