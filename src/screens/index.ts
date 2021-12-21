import {createScreen} from '../navigation';
import {Screen} from '../navigation';
import {Home} from './home/Home';
import {ProductDetails} from './productDetails/ProductDetails';

export const screens: Screen[] = [
  {name: 'home', component: Home},
  {name: 'productDetails', component: ProductDetails},

 
];

//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
