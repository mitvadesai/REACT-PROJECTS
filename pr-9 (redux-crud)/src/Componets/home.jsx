import { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, getAllNoteAsync } from "../services/actions/Note.action";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Note } = useSelector(state => state.NoteReducer);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(deleteNote(id))
    }

    useEffect(() => {
        dispatch(getAllNoteAsync())
    }, [Note])

    return (
        <>
           

            <Container className="mt-3">
                 <Table>
                    <tbody>
                        {/* {
                            recipes.map((recipe) => (
                                <tr key={recipe.id}>
                                    <td><Button onClick={()=> handleEdit(recipe.id)}>Edit</Button></td>
                                    <td><Button onClick={()=> handleDelete(recipe.id)}>Delete</Button></td>
                                </tr>
                            ))
                        } */}
                    </tbody>
                </Table>
            </Container>
        </>
    )
};

export default Home;