const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [] // ✅ LocalStorage से डेटा लोड करें
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            let updatedCart;
            if (existingItem) {
                updatedCart = state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ अपडेटेड कार्ट को सेव करें
            return { ...state, cartItems: updatedCart };

        case "REMOVE_FROM_CART":
            const filteredCart = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(filteredCart)); // ✅ अपडेटेड कार्ट को सेव करें
            return { ...state, cartItems: filteredCart };

        case "INCREASE_QUANTITY":
            const increasedCart = state.cartItems.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(increasedCart));
            return { ...state, cartItems: increasedCart };

        case "DECREASE_QUANTITY":
            const decreasedCart = state.cartItems.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(decreasedCart));
            return { ...state, cartItems: decreasedCart };

        case "CLEAR_CART":
            localStorage.removeItem("cart"); // ✅ Cart clear करने पर localStorage भी हटाएं
            return { ...state, cartItems: [] };

        default:
            return state;
    }
};

export default cartReducer;
