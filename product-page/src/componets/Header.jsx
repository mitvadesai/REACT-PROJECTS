// import Logo from "../assets/logo.png";
// import Seacrh from "../assets/search.svg";
// import Wishlist from "../assets/wishlist.svg";
// import Dropdown from "../assets/drop.svg";

import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar d-flex justify-content-between align-items-center navbar-expand-lg">
          <div>
            <a className="navbar-brand" href="#">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="logo" width="115px" />
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex search" role="search">
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Search for items..."
                  aria-label="Search"
                />
                <ul className="navbar-nav me-auto">
                  <li className="nav-item dropdown all-categories">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All Categories
                      <img src="https://th.bing.com/th/id/OIP.yQxVl3uYhegN6ykRtTG_MQHaHk?rs=1&pid=ImgDetMain"className="dropdown-logo" alt="dropdown" />
                    </a>
                    <ul className="dropdown-menu m-0 p-0">
                      <li>
                        <a className="dropdown-item cat-drop" href="#">
                          All Categories
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Mens
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Womens
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Electronics
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <button className="btn search-btn" type="submit">
                  {/* <img src={Seacrh} alt="search" className="search-logo" /> */}
                </button>
              </form>
            </div>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 user-section mb-lg-0 ">
              <div className="dropdown">
                <button className="dropdown-button nav-link">
                    {/* <img src="https://as1.ftcdn.net/v2/jpg/03/64/88/42/1000_F_364884228_JIux2brVPuxvpm7wmgShdUMWkOAQCsXM.jpg" className="user-logo" alt="user" /> */}
                    Account</button>
                <div className="dropdown-content">
                  <a href="#">Register</a>
                  <a href="#">Checkout</a>
                  <a href="#">Login</a>
                </div>
              </div>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  {/* <img src={Wishlist} className="wish-logo" alt="wishlist" /> */}
                  Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-0" href="#">
                  <img src="https://static.vecteezy.com/system/resources/previews/027/381/351/non_2x/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" className="cart-logo" alt="cart" />
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;