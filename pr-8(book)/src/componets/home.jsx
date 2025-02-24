import { useState } from "react";
import { getOldStorage, setLocalStorageData } from "../Services/Localstoragedata";
import { Button, Card, Container } from "react-bootstrap";
import { FaEye, FaPenToSquare, FaTrash } from 'react-icons/fa6';
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();

    const [book, setBook] = useState(getOldStorage());
    const [filterData, setFilterData] = useState(getOldStorage());
    const [search, setSearch] = useState("");
    
    const handleSorting = (field, type) => {

        if(type === 'asc'){
          let sortedData =    [...filterData].sort((a,b)=> {
            return a[field].localeCompare(b[field]);
          })
  
          setFilterData(sortedData);
        }else if(type === 'desc'){
          let sortedData =    [...filterData].sort((a,b)=> {
            return b[field].localeCompare(a[field]);
          })
  
          setFilterData(sortedData);
        }
        
      }
    
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 3;
    const totalPages = Math.ceil(filterData.length / booksPerPage);

    const handleSearch = () => {
        const filteredBooks = book.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
        setFilterData(filteredBooks);
        setSearch("");
        setCurrentPage(1); 
    };

    const handleView = (id) => {
        navigate(`/view/${id}`);
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        const updatedData = book.filter((b) => b.id !== id);
        setBook(updatedData);
        setFilterData(updatedData);
        setLocalStorageData(updatedData);
    };
    
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filterData.slice(indexOfFirstBook, indexOfLastBook);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="d-flex ms-5 gap-4 mt-5">
                <input type="text" value={search} name="search" onChange={(e) => setSearch(e.target.value)} />
                <Button onClick={handleSearch}>SEARCH</Button>
             <Button onClick={() => handleSorting('title'||'price','asc')}>ASCENDING ⬆️</Button>||<Button  onClick={() => handleSorting('title'||'price','desc')}>DESCENDING⬇️</Button>
            </div>
            
            <Container className="d-flex flex-wrap gap-4 mt-4">
                {currentBooks.map((book) => (
                    <Card key={book.id} className="card">
                        <Card.Img variant="top" src={book.image} className="img" />
                        <Card.Body>
                            <Card.Title>TITLE: {book.title}</Card.Title>
                            <Card.Text>DESC: {book.desc}</Card.Text>
                            <Card.Text>AUTHOR: {book.author}</Card.Text>
                            <Card.Text>PRICE: {book.price}</Card.Text>
                            <Card.Text>LANGUAGE: {book.language}</Card.Text>
                            <Button onClick={() => handleView(book.id)} variant="primary">
                                <FaEye /> VIEW
                            </Button> &nbsp;
                            <Button onClick={() => handleEdit(book.id)} variant="secondary">
                                <FaPenToSquare /> EDIT
                            </Button> &nbsp;
                            <Button onClick={() => handleDelete(book.id)} variant="danger">
                                <FaTrash /> DELETE
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
            
            <div className="d-flex justify-content-center mt-4">
                <Button onClick={prevPage} disabled={currentPage === 1} variant="outline-primary" className="me-2">
                 PREVIOUS
                </Button>
                <span> PAGE {currentPage} of {totalPages} </span>
                <Button onClick={nextPage} disabled={currentPage === totalPages} variant="outline-primary" className="ms-2">
                    NEXT
                </Button>
            </div>
        </>
    );
};

export default Home;
