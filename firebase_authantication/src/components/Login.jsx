import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAsync } from "../services/actions/auth.action";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.userReducer);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(inputData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "400px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={inputData.email}
              onChange={handleChanged}
              placeholder="Enter Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={inputData.password}
              onChange={handleChanged}
              placeholder="Enter Password"
              required
            />
          </Form.Group>
          <Button type="submit" className="w-100 h-50 mb-3" variant="primary">
            Sign In
          </Button>
          <Button className="w-100 h-50 mb-3 google" variant="danger">
          <i><AiFillGoogleCircle /></i> Sign in with Google
          </Button>
          <div className="text-center">
            <p>
              Don't have an account? <Link to="/signup">Register Now</Link>
            </p>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
