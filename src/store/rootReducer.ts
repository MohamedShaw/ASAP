import { combineReducers } from "@reduxjs/toolkit";
import { internetReducer, currentUserReducer, themeReducer, locationReducer, } from '../slices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistConfig, persistReducer } from 'redux-persist';
import { cartReducer } from "slices/cart";



export const reducers = combineReducers({
  internet: internetReducer,
  theme: themeReducer,
  auth: currentUserReducer,
  cart: cartReducer,
  location: locationReducer,
});

const persistConfig: PersistConfig<RootStore> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['auth']
}

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;