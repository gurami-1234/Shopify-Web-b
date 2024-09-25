import { FaUnlock,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './LogIn.css'
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthWindowContext } from "context/AuthWindowContext/AuthWindowContext";
import { getToken } from "helper/api";
function LogIn() {
    const {setIsWinOpen} = useContext(AuthWindowContext)
    
    const [loginInfo,setLoginInof] = useState({
        username:"",
        password:''
    })

    const authUser = ()=>{
        getToken(loginInfo)
    }
    return (  
        <div className="login">
            <div className="container">
            <button className='close-btn' onClick={()=>setIsWinOpen(false)}><IoClose /></button>
                <p className="header"> <FaUnlock fontSize={18}/> Login <FaUnlock fontSize={18}/> </p>
                <div className="input">
                    <FaUser className="icon"/>
                    <input type="text" placeholder="Your username here" onChange={(e)=>setLoginInof({...loginInfo,username:e.target.value})} />
                </div>
                <div className="input">
                    <RiLockPasswordFill className="icon"/>
                    <input type="password" placeholder="Your password here" onChange={(e)=>setLoginInof({...loginInfo,password:e.target.value})} />
                </div>
                <button className="login-btn" onClick={authUser}>Submit</button>
                <p className="no-account"><span>No Account? </span><a href="#">Register</a></p>
            </div>
        </div>
    );
}

export default LogIn;