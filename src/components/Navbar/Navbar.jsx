import { IoSearch } from "react-icons/io5"
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import './Navbar.css'

function Navbar() {
    return (  
        <nav className="nav-bar">
            <div className="logo">
                <span>SHOPIFY</span>
            </div>
            <div className="search-place">
                    <input type="text" placeholder="Search for a product..." />
                    <button> <IoSearch/> </button>
            </div>
            <ul className="nav-right-side">
                <li>Products</li>
                <li>Categories</li>
                <li className="icon-and-text"><FaUser className="secondary-color-b"/><span  className="secondary-color">Login</span></li>
                <li className="big-size secondary-color">
                    <AiOutlineShoppingCart /> 
                    <div className="cart-count"><span>0</span></div> 
                </li>
                <li className="big-size"><FiMoon/></li>
            </ul>
        </nav> 
    );
}

export default Navbar;