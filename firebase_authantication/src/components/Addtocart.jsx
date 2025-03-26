import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "../services/actions/Product.action";
import "bootstrap/dist/css/bootstrap.min.css";

const AddToCart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.ProductReducer);
  const { product } = useSelector((state) => state.ProductReducer);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(getProductAsync(id));
    }
  }, [id]);

  useEffect(() => {
    if (isCreated) {
        navigate("/");
    }
}, [isCreated]);

  const handleRemoveFromCart = () => {
    dispatch(handleRemoveFromCart(product.id));
    alert("Removed from cart!");
  };

  return (
    <div className="container mt-5 d-flex">
      {product && (
        <>
          {/* Left Side - Product Table */}
          <div className="col-md-8">
            <h2>Product Details</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Size</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td><img src={product.image} alt={product.title} style={{ width: '100px' }} /></td>
                  <td>{product.size}</td>
                  <td>{product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Side - Sidebar with Total and Cart Actions */}
          <div className="col-md-4 border-start ps-4">
            <h3>Order Summary</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="form-control mb-3"
            />
            <h4>Total Price: ₹{product.price * quantity}</h4>
            <button onClick={handleRemoveFromCart} className="btn btn-danger">
              Remove from Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
