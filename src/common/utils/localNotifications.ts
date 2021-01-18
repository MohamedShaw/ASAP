import Snackbar from 'react-native-snackbar';
import i18n from 'react-native-i18n';
import { rootStore } from 'store';

export const showSuccess = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: rootStore.getState().theme.colors.primary,
    textColor: rootStore.getState().theme.colors.white,
    action: {
      text: i18n.t('close'),
      textColor: rootStore.getState().theme.colors.white
    }
  });
};

export const showError = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: rootStore.getState().theme.colors.errorBackground,
    textColor: rootStore.getState().theme.colors.white,
    action: {
      text: i18n.t('close'),
      textColor:  rootStore.getState().theme.colors.white
    }
  });
};