import { createSelector } from "reselect";

// Select the cart
const selectCart = createSelector(
    [(state) => state.cart],
    (cart) => (cart)
)

const selectCartItems = createSelector(
    [selectCart],
    (cart) => (cart.items)
)

const selectCartTotal = createSelector(
    [selectCartitems],
    (items) => items.reduce((total, item) => total + item.quantity*item.price, 0)
)

const selectCartCount = createSelector(
    [selectCartitems],
    (items) => items.reduce((total, item) => total + item.quantity, 0)
)   



