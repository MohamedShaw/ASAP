import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { appConfig } from './appConfig';
import { onAppLaunch } from './appLaunch';

export const startApp = async () => {
  Navigation.events().registerAppLaunchedListener(async () => {
   
    await appConfig();
    onAppLaunch()
  });
}