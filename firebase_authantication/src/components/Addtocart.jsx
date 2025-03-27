import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart, clearCart } from "../services/actions/cartAction";
import { Button, Container, ListGroup } from "react-bootstrap";
import { clearCart, removeFromCart } from "../services/actions/cartaction";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <Container className="mt-4">
            <h2>🛒 Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ListGroup>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <strong>{item.title}</strong> - ₹{item.price}
                                <Button 
                                    variant="danger" 
                                    className="ms-2"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button variant="warning" className="mt-3" onClick={() => dispatch(clearCart())}>
                        Clear Cart
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
