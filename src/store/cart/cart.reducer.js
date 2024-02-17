import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./utils";

const CART_INITIAL_STATE = {
    items: []
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        actionAddItemToCart: (state, action) => addCartItem(state.items, action.payload),
        actionRemoveItemFromCart: (state, action) => removeCartItem(state.items, action.payload),
        actionClearItemFromCart: (state, action) => clearCartItem(state.items, action.payload)
    }
})

export const { actionAddItemToCart, actionRemoveItemFromCart, actionClearItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;