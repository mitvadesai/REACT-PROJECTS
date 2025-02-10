import { IoHeartOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
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
                <i><FiUser /></i>&nbsp;
                    Account</button>
                <div className="dropdown-content">
                  <a href="#">Register</a>
                  <a href="#">Checkout</a>
                  <a href="#">Login</a>
                </div>
              </div>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                <i><IoHeartOutline /></i>&nbsp;
                Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-0" href="#">
                <i><LuShoppingCart /></i>&nbsp;
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