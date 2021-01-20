import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';
import { State } from 'react-native-gesture-handler';
const initialState = {
    cart: {},
    cart_total: 0,
    items_count: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction) => {
            const { item, addWithCount = 1 } = action.payload;

            if (state.cart[item.id]) {
                state.cart_total += item.price * addWithCount;
                state.cart[item.id].count += addWithCount;
            } else {
                let cart = { ...state.cart };
                let cart_total = state.cart_total + addWithCount * item.price;

                cart[item.id] = { item, count: addWithCount };
                let items_count = Object.keys(cart).length;

                return {
                    cart,
                    cart_total,
                    items_count,
                };
            }
        },
        removeItemCart: (state, action: PayloadAction) => {
            const { id } = action.payload;
            state.items_count -= 1;
            state.cart_total -= state.cart[id].item.price * state.cart[id].count;
            delete state.cart[id];
        },

        clearCart: (state) => {
            return initialState;
        },
    },
});

export const { clearCart, addToCart, removeItemCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const useCart = () => {
    const cart = useSelector((state: RootStore) => state.cart);
    return cart;
};
