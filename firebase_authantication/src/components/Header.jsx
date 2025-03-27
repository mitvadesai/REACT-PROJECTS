import { Button, Container, Navbar, Offcanvas, ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { HiUserCircle } from "react-icons/hi2";
import { IoCart } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logOutAsync } from "../services/actions/auth.action";

const Header = () => {
    const { user } = useSelector(state => state.userReducer);
    const { cart } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);

    const handleLogout = () => {
        dispatch(logOutAsync());
    };

    const toggleCart = () => setShowCart(!showCart);

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        {/* <Link to="/Cart">Cart ({cartItems.length})</Link> Cart Item Count दिखाएगा */}
                            <Link to="/add"><IoIosAddCircle />&nbsp;&nbsp;Add Product</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            {user ? (
                                <Button className="logout" onClick={handleLogout}><BiLogOutCircle />&nbsp;&nbsp;Logout</Button>
                            ) : (
                                <Link to="/signin"><HiUserCircle />&nbsp;&nbsp;Sign In</Link>
                            )}
                            &nbsp;&nbsp;<PiDotsThreeVerticalBold />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Offcanvas show={showCart} onHide={toggleCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.length > 0 ? (
                        <ListGroup>
                            {cart.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    {item.title} - ₹{item.price}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </Offcanvas.Body>
            </Offcanvas> */}
        </>
    );
};

export default Header;

