import { FaUnlock,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './LogIn.css'
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { AuthWindowContext } from "context/AuthWindowContext/AuthWindowContext";
function LogIn() {
    const {setIsWinOpen} = useContext(AuthWindowContext)
    return (  
        <div className="login">
            <div className="container">
            <button className='close-btn' onClick={()=>setIsWinOpen(false)}><IoClose /></button>
                <p className="header"> <FaUnlock fontSize={18}/> Login <FaUnlock fontSize={18}/> </p>
                <div className="input">
                    <FaUser className="icon"/>
                    <input type="text" placeholder="Your username here" />
                </div>
                <div className="input">
                    <RiLockPasswordFill className="icon"/>
                    <input type="text" placeholder="Your password here" />
                </div>
                <button className="login-btn">Submit</button>
                <p className="no-account"><span>No Account? </span><a href="#">Register</a></p>
            </div>
        </div>
    );
}

export default LogIn;