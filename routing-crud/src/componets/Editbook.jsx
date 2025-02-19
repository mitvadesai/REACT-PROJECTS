import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getOldStorage, setLocalStorageData } from "../Services/Localstoragedata";
import { useNavigate, useParams } from 'react-router';


const Editbook = () => {
    const {id} = useParams();
    
    const navigate = useNavigate();
    const initalProduct = {
        id: "",
        title: "",
        desc: "",
        price: "",
        author: "",
        image: "",
        language: "",
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
            console.log(" updateSubmit", inputForm)
            let data = getOldStorage();
            let updateData = data.map(book => {
                if(book.id == inputForm.id){
                    return inputForm
                }else{
                    return book
                }
            });
            setLocalStorageData(updateData);
            navigate("/");
      }

      useEffect(()=> {
        let data = getOldStorage();
        let singlebook = data.find(book => book.id == id);
        setInputForm(singlebook)
      }, []);
  return (
    <>
      <Container className="mt-3">
        <h2>EDIT BOOK</h2>
        <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  TITLE
                </Form.Label>
                <Col sm="10">
                  <Form.Control
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
                  AUTHOR
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter author"
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
                    aria-label="Default select example"
                    name="category"
                    onChange={handleChange}
                    
                  >
                    <option value="">LANGUAGES</option>
                    <option value="gujrati" selected= {inputForm.language == "gujrati"}>GUJRATI</option>
                    <option value="english" selected= {inputForm.language == "english"}>ENGLISH</option>
                    <option value="hindi" selected= {inputForm.language == "hindi"}>HINDI</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button type="submit">EDIT BOOK</Button>
                </Col>
              </Form.Group>
            </Form>
      </Container>
    </>
  );
};

export default Editbook;