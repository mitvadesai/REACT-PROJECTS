import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import { HiUserCircle } from "react-icons/hi2";
import { IoCart } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <i><HiUserCircle />&nbsp;&nbsp;login</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i><IoCart />&nbsp;&nbsp;cart</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={"/add"}><IoIosAddCircle />&nbsp;&nbsp;ADD PRODUCT</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i><PiDotsThreeVerticalBold /></i>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;