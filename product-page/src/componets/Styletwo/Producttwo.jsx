import { } from 'react-bootstrap'
import Styletwo from './styletwo';

const Producttwo = () => {
    return (
        <>
            {/* ===== style-2 ==== */}
            <div className="products_item">
                <div className="product_style_one">
                    <div className="style_hed">
                        <h3>Style 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore lacus vel facilisis. </p>
                    </div>
                </div>
            </div>

            <div className="product_card">
            <Styletwo
                img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg"
                name="Organic fresh lemon"
                intro="Lorem ipsum dolor impicit adipisicing elit."
                star="★★★★★"
                price="$145"
                oldprice="150"
            />
               <Styletwo
                img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg"
                name="Organic fresh apple juice"
                intro="Lorem ipsum dolor impicit adipisicing elit."
                star="★★★★★"
                price="$145"
                oldprice="150"
            />
               <Styletwo
                img="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg"
                name="Organic fresh venila farm watermelon 5kg"
                intro="Lorem ipsum dolor impicit adipisicing elit."
                star="★★★★★"
                price="$145"
                oldprice="150"
            />
            </div>





        </>
    )

}
export default Producttwo;