import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const getOldStorage = () => {
  return JSON.parse(localStorage.getItem('details')) || []
}

const Crud = () => {
  const initaldetails = {
    id: "",
    name: "",
    age: "",
    email: "",
    deparment: "",
    position: "",
    mobnub: "",
  };
  let [inputForm, setInputForm] = useState(initaldetails);
  const [storage, setStorage] = useState(getOldStorage());
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      let updateData = storage.map(item => {
        if (item.id == inputForm.id) {
          return inputForm;
        } else {
          return item;
        }
      })
      setStorage(updateData);
      setIsEdit(!isEdit)
    } else {
      let id = Math.floor(Math.random() * 100000);
      let newProduct = { ...inputForm, id: id };
      setStorage([...storage, newProduct]);
    }
    setInputForm(initaldetails);
  };

  const handleDelete = (id) => {
    let updatedStorage = storage.filter((details) => details.id != id);
    setStorage(updatedStorage);
  }
  const handleEdit = (id) => {
    let singleProduct = storage.find(details => details.id == id);
    setInputForm(singleProduct)
    setIsEdit(!isEdit)
  }

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(storage));
  }, [storage]);
  return (
    <>
      <Container className="main">
      <h2>{isEdit ? "Edit" : "Add"} details </h2>
        <Row className="img">
          <Col sm={8}>
           
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row}>
                <Form.Label>
                  name :
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={inputForm.name}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>
                  age :
                </Form.Label>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Enter your age"
                    name="age"
                    value={inputForm.age}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>
                  email :
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter your email"
                    name="age"
                    value={inputForm.age}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label>
                  deparment : 
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter deparment"
                    name="deparment"
                    value={inputForm.price}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>
                  position : 
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter position"
                    name="position"
                    value={inputForm.price}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>
                  mob nub :
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter number"
                    name="number"
                    value={inputForm.price}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label></Form.Label>
                <Col>
                  <Button type="submit">{isEdit ? "Update" : "Add"} details</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>

        </Row>
        <Col className="data"> 
          <h2>View details</h2>
          <Table striped bordered hover variant="light" className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>age</th>
                <th>email</th>
                <th>deparment</th>
                <th>position</th>
                <th>number</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                storage.map((details) => (
                  <tr key={details.id}>
                    <td>{details.id}</td>
                    <td>{details.name}</td>
                    <td>{details.age}</td>
                    <td>{details.email}</td>
                    <td>{details.deparment}</td>
                    <td>{details.position}</td>
                    <td>{details.number}</td>
                    <td><Button variant="outline-primary" onClick={() => handleEdit(details.id)}>EDIT</Button></td>
                    <td><Button variant="outline-primary" onClick={() => handleDelete(details.id)}>DELETE</Button></td>
                  </tr>
                ))
              }

            </tbody>
          </Table>
        </Col>
      </Container>
    </>
  );
};

export default Crud;