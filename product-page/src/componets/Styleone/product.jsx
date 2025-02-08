import { } from 'react-bootstrap'
import Styleone from './styleone';

const Product = () => {
    return (
        <>
            <div className="products">
                <div className="products_hed">
                    <h2>product</h2>
                    <span>
                        <a href="">Home</a> - product
                    </span>
                </div>
            </div>

         
        {/* ===== style-1 ==== */}
        <div className="products_item">
                <div className="product_style_one">
                    <div className="style_hed">
                        <h3>Style 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>
                </div>
            </div>
           <div className="product_card">
           <Styleone 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg"
              name="snaks"
              star="★★★★★"
              rating="(5.0)"
              intro="Best snakes with hazel nut pack 200gm"
              price="$145"
              oldprice="150"
            />
            <Styleone 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg"
              name="fruits"
              star="★★★★★"
              rating="(4.5)"
              intro="Fresh organic apple 1kg simla"
              price="$120.25"
              oldprice="123.25"
            />
                <Styleone 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg"
              name="fruits"
              star="★★★★★"
              rating="(3.2)"
              intro="Organic fresh venila farm watermelon 5kg"
              price="$50.30"
              oldprice="72.60"
            />
                 <Styleone 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/10.jpg"
              name="sanks"
              star="★★★★★"
              rating="(5.0)"
              intro="Sweet crunchy nut mix 250gm pack"
              price="$120.25"
              oldprice="123.25"
            />
           
           </div>
        


        </>
    )

}
export default Product;