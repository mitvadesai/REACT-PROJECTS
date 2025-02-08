const Styleone = (props) => {

    const {img , name , star , rating , intro , price , oldprice  } = props;
    return(
     <>
        <div className="product-card">
               <div className="card-img">
                <img src={img} alt="productimage" />
               </div>
               <div className="shopping-bag">
                  {/* <img src="https://static.vecteezy.com/system/resources/previews/000/422/881/original/shopping-bag-icon-vector-illustration.jpg" alt="shopping-bag" /> */}
               </div>
               <div className="card-btn">
                 <div className="heart">
                    {/* <img src="https://cdn.vectorstock.com/i/1000v/37/83/heart-icon-love-vector-23683783.avif" alt="hearticon" /> */}
                 </div>
                 <div className="eye">
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/014/475/656/original/eye-icon-simple-flat-eye-design-vision-care-concept-wear-glasses-for-a-clear-vision-png.png" alt="eye" /> */}
                 </div>
               </div>
               <div className="card-data">
                  <div className="name">
                    <a href="#">{name}</a>
                  </div>
                  <div className="star">
                    {star}
                   <a href=""> {rating}</a>
                  </div>
                  <div className="card-intro">
                        <a href="">{intro}</a>
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
export default Styleone;