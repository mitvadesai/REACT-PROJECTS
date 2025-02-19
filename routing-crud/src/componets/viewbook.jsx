
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getOldStorage, setLocalStorageData } from "../Services/Localstoragedata";
import { Navigate, useNavigate, useParams } from "react-router";
import { useState } from "react";
const Viewbook = () => {
    const {id} = useParams();
    
    // const navigate = useNavigate();
    // const initalProduct = {
    //     id: "",
    //     title: "",
    //     desc: "",
    //     price: "",
    //     author: "",
    //     image: "",
    //     language: "",
    //   };
   

      const handleBack = () => {
        navigate('/')
      }

    //   const [inputForm, setInputForm] = useState(initalProduct);
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
                // Navigate("/");
          }
    return(
        <>
        <Container className="mt-3">
        <h2>view book</h2>
        <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button type="submit"  onClick={handleBack}>BACK</Button>
                </Col>
              </Form.Group>
            </Form>
      </Container>
    </>
    )
}
 export default Viewbook;