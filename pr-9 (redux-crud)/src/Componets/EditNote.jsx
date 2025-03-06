import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addNote, getNote, updateNote } from "../services/actions/Note.action";
import { useNavigate, useParams } from "react-router";


const EditNote = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { Note, isUpdate } = useSelector(state => state.NoteReducer);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        Note: "",
    })

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateNote(inputData))
    }

    useEffect(() => {
        if(isUpdate){
            navigate("/")
        }
    }, [isUpdate])

    useEffect(() => {
        if(id){
            dispatch(getNote(id))
        }
    }, [id]);

    useEffect(() => {
        if(Note){
            setInputData(Note)
        }
    }, [Note])
    return (
        <>
            <Container className="mt-3">
                <h2 className="mb-4">Edit notes</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="title" value={inputData.title} onChange={handleChanged} placeholder="Enter Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            write note....
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="Note" value={inputData.Note} onChange={handleChanged} placeholder="Enter notee" />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Edit</Button>
                </Form>
            </Container>
        </>
    )
};

export default EditNote;