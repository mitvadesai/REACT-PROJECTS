import { useEffect, useState } from "react";
import { Button, Container, Spinner, Card, Form, Row, Col, ListGroup, Pagination, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../services/actions/Product.action";
import { useNavigate } from "react-router";   
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Products, isLoading } = useSelector(state => state.ProductReducer);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState("title");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const [selectedSort, setSelectedSort] = useState({ title: true, price: false, category: false });

    useEffect(() => {
        dispatch(getAllProductAsync());
    }, []);

    useEffect(() => {
        let filtered = Products;
        if (searchTerm.trim()) {
            filtered = Products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.size.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        filtered.sort((a, b) => {
            if (sortBy === "price") return a.price - b.price;
            return a[sortBy].localeCompare(b[sortBy]);
        });

        setFilteredProducts(filtered);
    }, [searchTerm, Products, sortBy]);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(deleteProductAsync(id));
    };

    const handleSortChange = (field) => {
        setSelectedSort(prev => ({
            title: false,
            price: false,
            category: false,
            [field]: true
        }));
        setSortBy(field);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <Container className="mt-3">
            <Carousel className="mb-4">
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/173cacfaf069fe7d.png?q=20" alt="First Offer" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/10e15f15b32bcddc.jpg?q=20" alt="First Offer" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20" alt="Second Offer" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/373914b13f0b4dfb.jpg?q=20" alt="Third Offer" />
                </Carousel.Item>
            </Carousel>

            <Row>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                           <h6>CATEGORY:</h6>
                            <Form.Control
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </ListGroup.Item>
                        <h2>FILTERS :</h2>
                        <ListGroup.Item>
                            <Form.Check 
                                type="checkbox" 
                                label="Sort by Title" 
                                checked={selectedSort.title} 
                                onChange={() => handleSortChange("title")} 
                            />
                            <Form.Check 
                                type="checkbox" 
                                label="Sort by Price" 
                                checked={selectedSort.price} 
                                onChange={() => handleSortChange("price")} 
                            />
                            <Form.Check 
                                type="checkbox" 
                                label="Sort by Category" 
                                checked={selectedSort.category} 
                                onChange={() => handleSortChange("category")} 
                            />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {isLoading ? (
                        <Spinner className="spinner-border text-danger" />
                    ) : (
                        <>
                            <Row>
                                {currentProducts.length > 0 ? (
                                    currentProducts.map((Product) => (
                                        <Col md={4} key={Product.id} className="mb-4">
                                            <Card>
                                                <Card.Img variant="top" src={Product.image} className="crd_img" />
                                                <Card.Body>
                                                    <Card.Text>
                                                        <strong>Title :</strong> {Product.title} <br />
                                                        <strong>Price :</strong> ₹{Product.price} <br />
                                                        <strong>Size :</strong> {Product.size} <br />
                                                        <strong>Category :</strong> {Product.category}
                                                    </Card.Text>
                                                    <Button variant="primary" onClick={() => handleEdit(Product.id)}><TbEdit /> Edit</Button>
                                                    <Button variant="primary" className="ms-2" onClick={() => handleDelete(Product.id)}><MdDeleteOutline /> Delete</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                ) : (
                                    <Col>
                                        <p className="text-center">No matching products found.</p>
                                    </Col>
                                )}
                            </Row>
                            <Pagination className="justify-content-center">
                                {[...Array(totalPages).keys()].map(num => (
                                    <Pagination.Item key={num + 1} active={num + 1 === currentPage} onClick={() => setCurrentPage(num + 1)}>
                                        {num + 1}
                                    </Pagination.Item>
                                ))}
                            </Pagination>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
