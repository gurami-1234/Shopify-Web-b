import { FaUnlock,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './LogIn.css'
function LogIn() {
    return (  
        <div className="login">
            <div className="container">
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