import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';


const initialState = {};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
    login: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { logout, login } = currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;

export const useCurrentUser = () => {
  const user = useSelector((state: RootStore) => state.auth.user);
  return user;
}