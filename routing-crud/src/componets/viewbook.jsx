
import { useState } from "react";
import { getOldStorage, setLocalStorageData } from "../Services/Localstoragedata";
import { Button, Card, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router"

const Home = () => {
    const navigate = useNavigate();

    const [book, setbook] = useState(getOldStorage());

    const handleBack = () => {
      navigate('/')
    }
    return(
        <>
            <h2>View Book</h2>
            <Container className="d-flex gap-4 mt-4" >
          
                {book.map((book) => (
                    <Card key={book.id} className="body">
                    <Card.Img variant="top" src={book.image} className="imgage"/>
                    <Card.Body >
                      <Card.Title className="textt"><p>TITLE : &nbsp;&nbsp;</p> {book.title}</Card.Title>
                      <Card.Title className="textt"><p>DESC : &nbsp;&nbsp;</p>{book.desc}</Card.Title>
                      <Card.Title className="textt"><p>AUTHOR : &nbsp;&nbsp;</p>{book.author}</Card.Title>
                      <Card.Title className="textt"><p>PRICE : &nbsp;&nbsp;</p> {book.price}</Card.Title>
                      <Card.Title className="textt"><p>LANGUAGE : &nbsp;&nbsp;</p>{book.language}</Card.Title>
                    </Card.Body>
                  </Card>
                ))}
               
                
              
        
            </Container>
            <Col sm="10">
                   <Button className="back" type="submit"  onClick={handleBack}>BACK</Button>
                 </Col>
        </>
    )
}
export default Home;