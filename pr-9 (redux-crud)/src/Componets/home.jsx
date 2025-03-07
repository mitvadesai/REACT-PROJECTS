import { useEffect, useState } from "react";
import { Button, Col, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../services/actions/Note.action";

const Home = () => {
    const dispatch = useDispatch();
    const { Note } = useSelector(state => state.NoteReducer);

    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    };

    return (
        <Container className="mt-3">
            <Table>
                <tbody>
                    {Note.length > 0 ? (
                        Note.map((note) => (
                            <tr key={note.id}>
                                <td>{note.title}</td>
                                <td>{note.note}</td>
                                <td>
                                    <Button onClick={() => handleDelete(note.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No notes available</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;
