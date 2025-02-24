import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/add")
    }
    return(
        <>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">BOOK STORE</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleClick}>ADD BOOK</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}
export default Header;