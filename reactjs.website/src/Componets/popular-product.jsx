import './style.css'
import { HiArrowSmRight } from "react-icons/hi";
const Popular_product = () => {
    return (
        <>
            <div className="pro_hed">
                <h3>Popular Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt
                    ut labore lacus vel facilisis. </p>
                <div className="pro_details">
                    <ul>
                        <li>All <i><HiArrowSmRight /></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Popular_product;