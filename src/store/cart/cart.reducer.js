import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./utils";

const CART_INITIAL_STATE = {
    items: []
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        actionAddItemToCart: (state, action) => {state.items = addCartItem(state.items, action.payload)},
        actionRemoveItemFromCart: (state, action) => {state.items = removeCartItem(state.items, action.payload)},
        actionClearItemFromCart: (state, action) => {state.items = clearCartItem(state.items, action.payload)}
    }
})

export const { actionAddItemToCart, actionRemoveItemFromCart, actionClearItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;