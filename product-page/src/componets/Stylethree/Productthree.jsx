import { } from 'react-bootstrap'
import Stylethree from './stylethree';

const Producthree = () => {
    return (
        <>
            

         
        {/* ===== style-1 ==== */}
        <div className="products_item">
                <div className="product_style_one">
                    <div className="style_hed">
                        <h3>Style 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>
                </div>
            </div>
           <div className="product_card">
           <Stylethree 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg"
              name="Organic fresh lemon"
              intro="Lorem ipsum dolor impicit adipisicing elit."
               star="★★★★★"
              price="$120.25"
              oldprice="123.25"
            />
               <Stylethree 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg"
              name="Organic fresh apple juice"
              intro="Lorem ipsum dolor impicit adipisicing elit."
               star="★★★★★"
              price="$120.25"
              oldprice="123.25"
            />
               <Stylethree 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg"
              name="Organic watermelon 5kg"
              intro="Lorem ipsum dolor impicit adipisicing elit."
               star="★★★★★"
              price="$120.25"
              oldprice="123.25"
            />
               <Stylethree 
              img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/4.jpg"
              name="Organic fresh venila farm"
              intro="Lorem ipsum dolor impicit adipisicing elit."
               star="★★★★★"
              price="$120.25"
              oldprice="123.25"
            />
           </div>

           
        


        </>
    )

}
export default Producthree;