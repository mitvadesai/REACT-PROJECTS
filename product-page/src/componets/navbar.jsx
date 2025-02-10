import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-height navbar-expand-lg border-0 d-flex justify-content-between align-items-center p-0">
          <div>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/01-monochrome-linear-icon-library/menu-bar.png" alt="list" className="list-logo"/>
          </div>
          <div id="navbarNavDropdown">
            <ul className="navbar-nav main-navbar">
              <li className="nav-item">
                <a className="nav-link text-underline" aria-current="page" href="#">
                  Home
                  <i><MdKeyboardArrowDown /></i>
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropdown-button nav-link text-underline">
                    Category
                    <i><MdKeyboardArrowDown /></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Shop Left Sidebar</a>
                    <a href="#">Shop Right Sidebar</a>
                    <a href="#">Full Width</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropdown-button nav-link text-underline">
                    Products
                    <i><MdKeyboardArrowDown /></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Product Left Sidebar</a>
                    <a href="#">Product Right Sidebar</a>
                    <a href="#">Product Full Width</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropdown-button nav-link text-underline">
                    Pages
                    <i><MdKeyboardArrowDown /></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Cart</a>
                    <a href="#">Checkout</a>
                    <a href="#">Track Order</a>
                    <a href="#">Wishlist</a>
                    <a href="#">FAQ</a>
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                    <a href="#">Policy</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropdown-button nav-link text-underline">
                    Blog 
                    <i><MdKeyboardArrowDown /></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Left Sidebar</a>
                    <a href="#">Right Sidebar</a>
                    <a href="#">Full Width</a>
                    <a href="#">Detail Left Sidebar</a>
                    <a href="#">Detail Right Sidebar</a>
                    <a href="#">Detail Full Width</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropdown-button nav-link text-underline">
                    Elements
                    <i><MdKeyboardArrowDown /></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Products</a>
                    <a href="#">Typography</a>
                    <a href="#">Buttons</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="phone"><i><IoCallOutline /></i> 
            +123 ( 456 ) ( 7890 )</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;