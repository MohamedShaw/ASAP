import { Options, OptionsModalPresentationStyle, Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import i18n from 'react-native-i18n';
import { Lang } from '../translation';
import { rootStore } from '../store';

export const defaultNavOptions: Options = {
  navigationBar: {
    backgroundColor: rootStore.getState().theme.colors.statusBar,
  },
  statusBar: {
    visible: true,
    style: Platform.Version > 23 ? 'dark' : 'light',
    backgroundColor: rootStore.getState().theme.colors.statusBar,
  },
  topBar: {
    drawBehind: true,
    visible: false,
    animate: false,
  },
  animations: {
    push: {
      waitForRender: false,
    },
    showModal: {
      waitForRender: false,
    },
  },
  modalPresentationStyle: OptionsModalPresentationStyle.currentContext,
  bottomTabs: {
    drawBehind: true,
    visible: false,
    animate: false,
    // tabsAttachMode: 'onSwitchToTab',
  },
};


export const setNavigationDefaultOptions = (options: Options = {}) => {
  Navigation.setDefaultOptions({
    ...defaultNavOptions,
    ...options,
    layout: {
      direction: i18n.locale === Lang.ar ? 'rtl' : 'ltr',
      backgroundColor: 'white',
      orientation: ['portrait'],
    },
  });
}