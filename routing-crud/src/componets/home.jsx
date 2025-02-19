import { useState } from "react";
import { getOldStorage, setLocalStorageData } from "../Services/Localstoragedata";
import { Button, Card, Container } from "react-bootstrap";
import {FaEye, FaPenToSquare, FaTrash} from 'react-icons/fa6'
import { useNavigate } from "react-router"

const Home = () => {
    const navigate = useNavigate();
    const [book, setbook] = useState(getOldStorage());

    const handleView = (id) => {
      navigate(`/view/${id}`);
    }
    const handleEdit = (id) => {
      navigate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
      let updatedData = book.filter((book) =>book.id != id);
      setbook(updatedData);
      setLocalStorageData(updatedData)
    }
    return(
        <>
            <Container className="d-flex gap-4 mt-4" >
                {book.map((book) => (
                    <Card key={book.id}>
                    <Card.Img variant="top" src={book.image} className="img"/>
                    <Card.Body>
                      <Card.Title className="text"><p>TITLE : &nbsp;&nbsp;</p> {book.title}</Card.Title>
                      <Card.Title className="text"><p>DESC : &nbsp;&nbsp;</p>{book.desc}</Card.Title>
                      <Card.Title className="text"><p>AUTHOR : &nbsp;&nbsp;</p>{book.author}</Card.Title>
                      <Card.Title className="text"><p>PRICE : &nbsp;&nbsp;</p> {book.price}</Card.Title>
                      <Card.Title className="text"><p>LANGUAGE : &nbsp;&nbsp;</p>{book.language}</Card.Title>
                      <Button onClick={() => handleView(book.id)} variant="primary">
                        <FaEye /> VIEW
                        </Button> &nbsp;
                      <Button onClick={() => handleEdit(book.id)} variant="secondary">
                        <FaPenToSquare /> EDIT
                        </Button> &nbsp;
                      <Button onClick={()=> handleDelete(book.id)} variant="danger">
                        <FaTrash /> DELEAT
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
            </Container>
        </>
    )
}
export default Home;