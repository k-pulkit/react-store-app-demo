import { createSelector } from "reselect";

// Select the cart
export const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => (cart.items)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (items) => items.reduce((total, item) => total + item.quantity*item.price, 0)
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (items) => items.reduce((total, item) => total + item.quantity, 0)
)   

// Select an item from cart
export const selectCartItem = createSelector(
    [
        (state) => state.cart.items,
        (_, itemId) => itemId
    ],
    (items, itemId) => {
        let existing = items.find(item => item.id === itemId)
        return existing ? items?.filter(item => item.id === itemId)[0] : null
    }
)

export const selectCartItemCount = createSelector(
    [
        selectCartItem,
        (_, ItemId) => ItemId
    ],
    (item, itemId) => {

    }
)




