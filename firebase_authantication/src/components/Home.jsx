import { useEffect, useState } from "react";
import { Button, Container, Spinner, Card, Row, Col, Form, ListGroup, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync, addProductAsync } from "../services/actions/Product.action";
import { useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToCartAsync } from "../services/actions/cartaction";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userReducer);
    const { Products, isLoading } = useSelector(state => state.ProductReducer);
    const { cartItems } = useSelector(state => state.cartReducer);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState(null);
    const [newProduct, setNewProduct] = useState({ title: "", price: "", image: "" });
    const productsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getAllProductAsync());
    }, [dispatch]);

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user, navigate]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(deleteProductAsync(id));
    };

    const handleView = (id) => {
        navigate(`/view/${id}`);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCartAsync(product));
    };

    const handleAddProduct = () => {
        dispatch(addProductAsync(newProduct));
        setNewProduct({ title: "", price: "", image: "" });
    };

    let filteredProducts = Products?.filter(product => 
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price?.toString().includes(searchTerm)
    ) || [];

    if (sortBy === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Form.Control
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Label>Sort by Price</Form.Label>
                            <Form.Check type="radio" label="Low to High" name="sortPrice" value="lowToHigh" onChange={handleSortChange} checked={sortBy === "lowToHigh"} />
                            <Form.Check type="radio" label="High to Low" name="sortPrice" value="highToLow" onChange={handleSortChange} checked={sortBy === "highToLow"} />
                        </ListGroup.Item>
                    </ListGroup>
                    <h5 className="mt-3">Add New Product</h5>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Title" value={newProduct.title} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} />
                        </Form.Group>
                        <Button className="mt-2" onClick={handleAddProduct}>Add Product</Button>
                    </Form>
                </Col>
                <Col md={9}>
                    {isLoading ? (
                        <Spinner animation="border" />
                    ) : (
                        <Row>
                            {currentProducts.length > 0 ? (
                                currentProducts.map((Product) => (
                                    <Col md={4} key={Product.id} className="mb-4">
                                        <Card>
                                            <Card.Img variant="top" src={Product.image} />
                                            <Card.Body>
                                                <Card.Text>
                                                    <strong>Title:</strong> {Product.title} <br />
                                                    <strong>Price:</strong> ₹{Product.price} <br />
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => handleEdit(Product.id)}><TbEdit /> Edit</Button>
                                                <Button variant="danger" className="ms-2" onClick={() => handleDelete(Product.id)}><MdDeleteOutline /> Delete</Button>
                                                <Button variant="primary" className="ms-2" onClick={() => handleView(Product.id)}><FaEye /> View</Button>
                                                <Button variant="primary" className="ms-2" onClick={() => handleAddToCart(Product)}><MdOutlineShoppingCart /> Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Col>
                                    <p className="text-center">No products available.</p>
                                </Col>
                            )}
                        </Row>
                    )}
                    <Pagination className="justify-content-center">
                        {[...Array(totalPages).keys()].map(num => (
                            <Pagination.Item key={num + 1} active={num + 1 === currentPage} onClick={() => setCurrentPage(num + 1)}>
                                {num + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
