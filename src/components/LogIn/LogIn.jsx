import { FaUnlock,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { getDataUsingToken, getToken } from "helper/api";
import {AuthWindowContext,AuthContext,UserInfoContext} from 'context'
import './LogIn.css'

function LogIn() {
    const {setUserInfo} = useContext(UserInfoContext)
    const {setIsWinOpen} = useContext(AuthWindowContext)
    const {setIsAuth} = useContext(AuthContext)
    const [loginInfo,setLoginInof] = useState({
        username:"",
        password:''
    })

    const authUser = ()=>{
        getToken(loginInfo)
            .then((res)=>{
                if(res==="Invalid credentials"){
                    alert("Login or password is incorrect")
                }else{
                    localStorage.setItem("accessToken",res)
                    getDataUsingToken(res)
                    .then((data)=>{
                        console.log(data);
                        setIsAuth(true)
                        setUserInfo(data)
                    })
                }
            })
            .finally(()=>setIsWinOpen(false))

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