import { createScreen } from '../navigation';
import { Screen } from '../navigation'
import { Intro } from './Intro/Intro';
import { Home } from './home/Home';
import { ProductDetails } from './productDetails/ProductDetails';

export const screens: Screen[] = [
  { name: "intro", component: Intro },
  { name: "home", component: Home },
  { name: "productDetails", component: ProductDetails }

];

//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
