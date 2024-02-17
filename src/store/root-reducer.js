import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from './cart/cart.reducer'

// Combine all reducers
export const rootReducer = combineReducers({
    'cart': cartReducer
})