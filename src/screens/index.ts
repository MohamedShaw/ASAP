import { createScreen } from '../navigation';
import { Screen } from '../navigation'
import { Intro } from './Intro/Intro'; 
import { Home } from './home/Home';

export const screens: Screen[] = [
  { name: "intro", component: Intro },
  { name: "home", component: Home }
];

//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
