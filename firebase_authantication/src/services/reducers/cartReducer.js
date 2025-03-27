// src/reducers/cart.reducer.js

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_TO_CART":
          return {
              ...state,
              cart: {
                  ...state.cart,
                  [action.payload.userId]: [
                      ...(state.cart[action.payload.userId] || []),
                      { ...action.payload.product, quantity: 1 },
                  ],
              },
          };
      case "REMOVE_FROM_CART":
          return {
              ...state,
              cart: {
                  ...state.cart,
                  [action.payload.userId]: state.cart[action.payload.userId]?.filter(
                      (item) => item.id !== action.payload.productId
                  ),
              },
          };
      case "INCREASE_QUANTITY":
          return {
              ...state,
              cart: {
                  ...state.cart,
                  [action.payload.userId]: state.cart[action.payload.userId]?.map((item) =>
                      item.id === action.payload.productId
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                  ),
              },
          };
      case "DECREASE_QUANTITY":
          return {
              ...state,
              cart: {
                  ...state.cart,
                  [action.payload.userId]: state.cart[action.payload.userId]?.map((item) =>
                      item.id === action.payload.productId && item.quantity > 1
                          ? { ...item, quantity: item.quantity - 1 }
                          : item
                  ),
              },
          };
      default:
          return state;
  }
};

export default cartReducer;
