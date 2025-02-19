import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { getOldStorage, setLocalStorageData } from "../Services/Localstoragedata"
import { useNavigate } from 'react-router'
import generateUniqueId from 'generate-unique-id'

const Addbook = () => {
    const navigate = useNavigate();
    const initalProduct = {
        id: "",
        title: "",
        desc: "",
        price: "",
        language: "",
        image: "",
        author: "",
      };
      let [inputForm, setInputForm] = useState(initalProduct);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputForm({
          ...inputForm,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Submit", inputForm)
            let id = generateUniqueId({
                length: 4,
                useLetters: false
              })
            let book = getOldStorage();
            book.push({...inputForm, id: id})
            setLocalStorageData(book);
            navigate("/");
      }
    return(
        <>
      <Container className="mt-3">
        <h2>ADD NEW BOOK</h2>
        <Form onSubmit={handleSubmit} className="form">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  TITLE
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                  className="input"
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    value={inputForm.title}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  DESCRIPTION
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                  className="input"
                    type="text"
                    placeholder="Enter Description"
                    name="desc"
                    value={inputForm.desc}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  BOOK AUTHOR
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                  className="input"
                    type="text"
                    placeholder="Enter name"
                    name="author"
                    value={inputForm.author}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                PRICE 
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                  className="input"
                    type="text"
                    placeholder="Enter price"
                    name="price"
                    value={inputForm.price}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  BOOK IMAGE
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                  className="input"
                    type="text"
                    placeholder="Enter Image URL"
                    name="image"
                    value={inputForm.image}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  LANGUAGES
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                  className="input"
                    aria-label="Default select example"
                    name="language"
                    onChange={handleChange}
                  >
                    <option value="">Select language</option>
                    <option value="gujrati">GUJRATI</option>
                    <option value="english">ENGLISH</option>
                    <option value="hindi">HINDI</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button className="btn" type="submit">ADD BOOK</Button>
                </Col>
              </Form.Group>
            </Form>
      </Container>
    </>
    )
}
export default Addbook;