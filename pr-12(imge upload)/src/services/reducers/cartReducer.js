const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
    let updatedCart;
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                updatedCart = state.cartItems.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };

        case "REMOVE_FROM_CART":
            updatedCart = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };

        case "CLEAR_CART":
            localStorage.removeItem("cart");
            return { ...state, cartItems: [] };

        case "INCREASE_QUANTITY":
            updatedCart = state.cartItems.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };

        case "DECREASE_QUANTITY":
            updatedCart = state.cartItems.map(item =>
                item.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { ...state, cartItems: updatedCart };

        default:
            return state;
    }
};

export default cartReducer;
