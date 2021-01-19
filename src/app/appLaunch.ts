import { AppNavigation } from '../navigation';
import { rootStore } from '../store';
import { tabs } from 'components/bottomTabs/BottomTabs';
// import { checkUpdate } from 'utils/dev';

export const onAppLaunch = () => {
  // console.log("app");

  const { user } = rootStore.getState().auth;
  if (user) {
    // authenticated
    AppNavigation.setRootScreen('home');
  } else {
    //noAuth
    AppNavigation.setRootBottomTabs(tabs);

  }

  // if (__DEV__) checkUpdate();
};
