import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../services/actions/cartaction";
import { Container, Button, ListGroup } from "react-bootstrap";

const Cart = () => {
    const { user } = useSelector(state => state.userReducer);
    const { carts } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const cartItems = user ? carts[user.id] || [] : [];

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(user.id, id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(user.id, id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(user.id, id));
    };

    return (
        <Container className="mt-4">
            <h2>My Cart</h2>
            {cartItems.length > 0 ? (
                <ListGroup>
                    {cartItems.map((item) => (
                        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                            <div>
                                <img src={item.image} alt={item.title} width="50" height="50" className="me-3"/>
                                {item.title} - ₹{item.price} x {item.quantity}
                            </div>
                            <div>
                                <Button variant="outline-danger" onClick={() => handleDecrease(item.id)}>-</Button>
                                <Button variant="outline-success" onClick={() => handleIncrease(item.id)}>+</Button>
                                <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </Container>
    );
};

export default Cart;
