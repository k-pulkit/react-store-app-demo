export function addCartItem(items, itemToAdd) {
    const existingItem = items.find(item => item.id === itemToAdd.id)
    return existingItem ? 
            items.map(item => item.id === itemToAdd.id ?
                                             {...item, quantity: item.quantity+1} 
                                            : 
                                              item)
            :
            [...items, {...itemToAdd, quantity: 1}]
}

export function removeCartItem(items, itemToRemove) {
    const existingItem = items.find(item => item.id === itemToRemove.id)
    return existingItem.quantity > 1 ? 
            items.map(item => item.id === itemToRemove.id ?
                                             {...item, quantity: item.quantity-1} 
                                            : 
                                              item)
            :
            items.filter(item => item.id !== itemToRemove.id)

}

export function clearCartItem(items, itemToRemove) {
    return items.map(item => item.id !== itemToRemove.id)
}