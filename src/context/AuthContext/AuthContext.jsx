import { UserInfoContext } from "context";
import { getDataUsingToken } from "helper/api";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()
function AuthContextComponent({children}) {
    const {setUserInfo} = useContext(UserInfoContext)
    const [isAuth,setIsAuth] = useState(
        localStorage.getItem('accessToken')===null?false:true
    )
    useEffect(()=>{
        localStorage.getItem('accessToken')!==null&&getDataUsingToken(localStorage.getItem('accessToken'))
            .then((data)=>{
                setUserInfo(data)
            })
    },[])
    useEffect(()=>{
        !isAuth && localStorage.removeItem('accessToken')
    },[isAuth])
    return (  
        <AuthContext.Provider value={{isAuth,setIsAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextComponent;