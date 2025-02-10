import { AiOutlineHeart } from "react-icons/ai";
const Stylethree = (props) => {

   const {img , name , star  , intro , price , oldprice  } = props;
   return(
    <>
       <div className="product-card">
              <div className="card-img">
               <img src={img} alt="productimage" />
              </div>
              <div className="card-btn">
              <div className="heart">
                    <AiOutlineHeart />
                 </div>
                <div className="eye">
                   <img src="https://static.vecteezy.com/system/resources/previews/014/475/656/original/eye-icon-simple-flat-eye-design-vision-care-concept-wear-glasses-for-a-clear-vision-png.png" alt="eye" />
                </div>
              </div>
              <div className="card-data">
                 <div className="pro_title">
                   <a href="#">{name}</a>
                 </div>
                 <div className="pro_title">
                       <p>{intro}</p>
               </div>
                 <div className="star">
                   {star}
                 </div>
                 
               <div className="pro_price">
                   <div className="new_price">{price}</div>
                   <div className="old_price">{oldprice}</div>
               </div>
              </div>
       </div>
    </>
   )
   }
   export default Stylethree;