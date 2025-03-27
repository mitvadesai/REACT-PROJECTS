const initialState = {
    cartItems: [], // Cart में जो भी प्रोडक्ट्स होंगे, उन्हें यहाँ स्टोर करेंगे
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload] // Cart में नया प्रोडक्ट ऐड करना
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload) // Cart से प्रोडक्ट हटाना
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: [] // Cart को पूरी तरह से खाली करना
            };
        default:
            return state;
    }
};

export default cartReducer;
