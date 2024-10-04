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
        getDataUsingToken(localStorage.getItem('accessToken')).then((resp)=>{
            if(!resp){
                localStorage.removeItem("accessToken")
                setIsAuth(false)
                console.clear()
            }
            else{
                setUserInfo(resp)
            }
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