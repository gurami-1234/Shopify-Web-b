import { createContext, useState } from "react";

export const UserInfoContext = createContext()
function UserInfoContextComponent({children}) {
    const [userInfo,setUserInfo] = useState(false)
    return ( 
        <UserInfoContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </UserInfoContext.Provider>
     );
}

export default UserInfoContextComponent;