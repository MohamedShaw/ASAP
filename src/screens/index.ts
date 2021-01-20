import { createScreen } from '../navigation';
import { Screen } from '../navigation';
import { Intro } from './Intro/Intro';
import { Home } from './home/Home';
import { ProductDetails } from './productDetails/ProductDetails';
import { Cart } from './cart/Cart';
import { MapScreen } from './mapScreen/MapScreen';
import { Addresses } from './addresses/Addresses';

export const screens: Screen[] = [
  { name: 'profile', component: Intro },
  { name: 'home', component: Home },
  { name: 'productDetails', component: ProductDetails },
  { name: 'cart', component: Cart },
  { name: 'mapScreen', component: MapScreen },
  {
    name: 'addresses',
    component: Addresses,
  },
];

//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
