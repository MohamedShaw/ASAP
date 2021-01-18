import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../models';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';


const initialState: UserData = {};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
    login: (state, action: PayloadAction<UserData>) => {
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