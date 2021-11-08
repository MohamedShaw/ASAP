import { createScreen } from '../navigation';
import { Screen } from '../navigation';
import { Profile } from './profile/Profile';
import { Home } from './home/Home';
import { ProductDetails } from './productDetails/ProductDetails';
import { Cart } from './cart/Cart';
import { MapScreen } from './mapScreen/MapScreen';
import { Addresses } from './addresses/Addresses';
import {  SignUp} from "./signUp/SignUp";
import { AddTask } from './addTask/AddTask';

export const screens: Screen[] = [
  { name: 'profile', component: Profile },
  { name: 'home', component: Home },
  { name: 'productDetails', component: ProductDetails },
  { name: 'cart', component: Cart },
  { name: 'mapScreen', component: MapScreen },
  {
    name: 'addresses',
    component: Addresses,
  },
  {
    name: 'signUp',
    component: SignUp,
  },
  {
    name: 'addTask',
    component: AddTask,
  },
];

//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
