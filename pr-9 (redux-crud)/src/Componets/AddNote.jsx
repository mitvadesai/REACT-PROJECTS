import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from "../services/actions/Note.action";
import { useNavigate } from "react-router";

const AddNote = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.NoteReducer);  
    const navigate = useNavigate();
    
    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        note: "", 
    });
    
    const [errors, setErrors] = useState({});

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!inputData.title.trim()) {
            newErrors.title = "Title is required";
        }
        if (!inputData.note.trim()) { 
            newErrors.note = "Note is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            let id = Math.floor(Math.random() * 100000);
            dispatch(addNote({ ...inputData, id }));

           
            setInputData({ id: "", title: "", note: "" });
        }
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/");
        }
    }, [isCreated, navigate]);

    return (
        <Container className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Title</Form.Label>
                    <Col sm="4">
                        <Form.Control 
                            type="text" 
                            name="title" 
                            value={inputData.title} 
                            onChange={handleChanged} 
                            placeholder="Enter Title" 
                        />
                        {errors.title && <Alert variant="danger" className="mt-2">{errors.title}</Alert>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Write Notes</Form.Label>
                    <Col sm="4">
                        <Form.Control 
                            type="text" 
                            name="note" 
                            value={inputData.note} 
                            onChange={handleChanged} 
                            placeholder="Enter Note" 
                        />
                        {errors.note && <Alert variant="danger" className="mt-2">{errors.note}</Alert>}
                    </Col>
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form>
        </Container>
    );
};

export default AddNote;

