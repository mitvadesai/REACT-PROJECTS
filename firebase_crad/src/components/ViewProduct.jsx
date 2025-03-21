
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "../services/actions/Product.action";

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Product } = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    if(id){
        dispatch(getProductAsync(id))
    }
}, [id]);
  return (
  <>
    {Product ? <>
        <h2>{Product.title}</h2>
    <h3>{Product.category}</h3>
    <p>{Product.instructions}</p>
    <p>{Product.ingredients}</p>
    </>: ""}
  </>
);
};

export default ViewProduct;
