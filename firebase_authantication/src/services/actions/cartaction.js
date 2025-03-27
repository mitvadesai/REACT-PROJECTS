// src/services/actions/cartaction.js

export const addToCartAsync = (product) => async (dispatch, getState) => {
    const { user } = getState().userReducer;
    if (!user) return alert("Please log in to add items to the cart.");

    dispatch({
        type: "ADD_TO_CART",
        payload: { userId: user.id, product },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cart));
};

// ✅ ADD THIS FUNCTION TO FIX THE ERROR
export const removeFromCart = (productId) => async (dispatch, getState) => {
    const { user } = getState().userReducer;
    if (!user) return;

    dispatch({
        type: "REMOVE_FROM_CART",
        payload: { userId: user.id, productId },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cart));
};

export const increaseQuantity = (productId) => async (dispatch, getState) => {
    const { user } = getState().userReducer;
    if (!user) return;

    dispatch({
        type: "INCREASE_QUANTITY",
        payload: { userId: user.id, productId },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cart));
};

export const decreaseQuantity = (productId) => async (dispatch, getState) => {
    const { user } = getState().userReducer;
    if (!user) return;

    dispatch({
        type: "DECREASE_QUANTITY",
        payload: { userId: user.id, productId },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cart));
};
export const removeFromCartAsync = (productId) => async (dispatch, getState) => {
    const { user } = getState().userReducer;
    if (!user) return;

    dispatch({
        type: "REMOVE_FROM_CART",
        payload: { userId: user.id, productId },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cart));
};