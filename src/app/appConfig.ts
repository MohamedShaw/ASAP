
import { registerScreens } from 'screens';
import { setNavigationDefaultOptions } from 'navigation';
import { Lang, langConfig, setLang } from 'translation';
import { listenToInternetStatus } from 'slices';
import { rootStore, storeConfig } from 'store';
import { registerCustomIconType } from 'common';
import customIcon from 'assets/icons/selection.json'

//general app configeration
export const appConfig = async () => {
  //register screens 
  registerScreens();
  // store config
  await storeConfig();
  //icons
  registerCustomIconType(customIcon);
  //langauges and local config
  await setLang('en')

  await langConfig();
  //listen to network
  rootStore.dispatch(listenToInternetStatus());
  //navigation config
  setNavigationDefaultOptions();
}