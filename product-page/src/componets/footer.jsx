import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="first_footer">
                    <div className="first_col">
                        <div className="logo_tab">
                            <div className="logo_img">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" />
                            </div>
                            <p>Carrot is the biggest market of grocery products. Get<br /> your daily needs from our store.</p>
                        </div>
                        <ul>
                            <li><a href=""><IoLocationOutline /></a>  51 Green St.Huntington ohaio beach ontario, NY<br /> 11746 KY 4783, USA.
                            </li>
                            <li><a href=""><MdOutlineMarkEmailRead /></a>  example@email.com</li>
                            <li><a href=""><IoCallOutline /></a>  +91 123 4567890</li>
                        </ul>
                    </div>

                    <div className="secound_col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Delivery Information</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">contact Us</a></li>
                            <li><a href="">Support Center</a></li>
                        </ul>
                    </div>

                    <div className="secound_col">
                        <h4> Category</h4>
                        <ul>
                            <li><a href="">Dairy & Bakery</a></li>
                            <li><a href="">Fruits & Vegetable</a></li>
                            <li><a href="">Snack & Spice</a></li>
                            <li><a href="">Juice & Drinks</a></li>
                            <li><a href="">Chicken & Meat</a></li>
                            <li><a href="">Fast Food</a></li>
                        </ul>
                    </div>

                    <div className="forth_col">
                        <div className="col_hed"> Subscribe Our Newsletter</div>
                        <div className="serch">
                            <input type="text" placeholder='Search here...' />
                        </div>
                        <div className="social_icon">
                            <span><a href=""><RiFacebookLine /></a></span>
                            <span><a href=""><RiTwitterXFill /></a></span>
                            <span><a href=""><IoBasketballOutline /></a></span>
                            <span><a href=""><FaInstagram /></a></span>
                        </div>
                        <div className="social_img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg" alt="" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" alt="" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" alt="" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg" alt="" />
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="last_footer">
                    <p>&copy; 2025 <a href="">Carrot</a>, All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;