import { IoSearch } from "react-icons/io5"
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon,FiSun} from "react-icons/fi";
import { NavLink,Link,  useNavigate} from "react-router-dom";
import { useContext, useState,  } from "react";
import {ThemeContext,AuthWindowContext,AuthContext,UserInfoContext} from 'context'
import { CiLogout } from "react-icons/ci";
import './Navbar.css'

function Navbar() {
    const {isDark,setIsDark} = useContext(ThemeContext)
    const {setIsWinOpen } = useContext(AuthWindowContext)
    const {userInfo} = useContext(UserInfoContext)
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [search,setSearch] = useState()
    const searchData = ()=>{
        
        const searchParam = new URLSearchParams({q:search})

        navigate({
            pathname:"/search",
            search:searchParam.toString()
        })
    }
    return (  
        <nav className={isDark?"nav-bar dark":"nav-bar"}>
            <div className="logo">
                <span><Link to="/">SHOPIFY</Link></span>
            </div>
            <div className="search-place">

                    <input 
                        type="text" 
                        placeholder="Search for a product..." 
                        onChange={(e)=>setSearch(e.target.value) }
                        value={search} />

                    <button onClick={searchData}> <IoSearch/> </button>
            </div>
            <ul className="nav-right-side">
                <li><NavLink to="products">Products</NavLink></li>
                <li><NavLink to="categories">Categories</NavLink></li>
                {
                    isAuth?(
                        <li className="icon-and-text"><CiLogout className="secondary-color-b" onClick={()=>setIsAuth(false)}/> <span className="secondary-color">{userInfo.firstName}</span></li>
                    ):(
                        <li className="icon-and-text" onClick={()=>setIsWinOpen(true)}><FaUser className="secondary-color-b" onClick={()=>setIsAuth(false)}/><span  className="secondary-color">Login</span></li>
                    )
                }
                
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