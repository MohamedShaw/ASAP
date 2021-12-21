import {createScreen} from '../navigation';
import {Screen} from '../navigation';
import {Home} from './home/Home';
import {ProductDetails} from './productDetails/ProductDetails';
import {Splash} from './splash';

export const screens: Screen[] = [
  {name: 'home', component: Home},
  {name: 'productDetails', component: ProductDetails},
  {name: 'splash', component: Splash},
];

//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
