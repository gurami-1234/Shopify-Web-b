import { IoSearch } from "react-icons/io5"
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon,FiSun} from "react-icons/fi";
import { NavLink,Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useContext } from "react";
import './Navbar.css'

function Navbar() {
    const {isDark,setIsDark} = useContext(ThemeContext)
    return (  
        <nav className={isDark?"nav-bar dark":"nav-bar"}>
            <div className="logo">
                <span><Link to="/">SHOPIFY</Link></span>
            </div>
            <div className="search-place">
                    <input type="text" placeholder="Search for a product..." />
                    <button> <IoSearch/> </button>
            </div>
            <ul className="nav-right-side">
                <li><NavLink to="products">Products</NavLink></li>
                <li><NavLink to="categories">Categories</NavLink></li>
                <li className="icon-and-text"><FaUser className="secondary-color-b"/><span  className="secondary-color">Login</span></li>
                <li className="big-size secondary-color">
                    <AiOutlineShoppingCart /> 
                    <div className="cart-count"><span>0</span></div> 
                </li>
                <button className="big-size theme-btn" onClick={()=>setIsDark( !isDark )}> {isDark?<FiSun/>:<FiMoon/>} </button>
            </ul>
        </nav> 
    );
}

export default Navbar;