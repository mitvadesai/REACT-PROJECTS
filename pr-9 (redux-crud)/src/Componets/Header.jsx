import { Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";


const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="" />
                    <Navbar.Brand href="/">keep</Navbar.Brand>
                    <Navbar.Toggle />
                    <Form>
                        <Row>
                            <Col xs="auto">
                            
                           <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="search"
                                />
                            </Col>
                        </Row>
                    </Form>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        <Link to={"/add"}><FaArrowRotateRight /></Link>
                        <i><FaBarsProgress /></i>
                        <i><IoSettings /></i>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};
export default Header;