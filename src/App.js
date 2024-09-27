import { useContext } from "react";

import {Footer,Navbar,Banner,LogIn} from 'components'
import { Routes,Route, Navigate} from "react-router-dom";
import {Home,Categories,Product,Products,NotFound,Category} from 'pages'
import { AuthWindowContext,ThemeContext,BannerContext, AuthContext, } from "context";
import Profile from "pages/Profile/Profile";


function App() {
  const {isDark} = useContext(ThemeContext)
  const {isBannerOpen} = useContext(BannerContext)
  const {isWinOpen} = useContext(AuthWindowContext)
  const {isAuth} = useContext(AuthContext)
  return (
    <div className={isDark?"App dark":"App"}>
        {isBannerOpen && <Banner/>}
        <Navbar/>
        {isWinOpen && <LogIn/>}
        <Routes>
          <Route index element={<Home/>} />
          <Route path="categories" element={<Categories/>} />
          <Route path="products" element={<Products/>} />
          <Route path="profile" element={isAuth?<Profile/>:<Navigate to="/"/>}/>
          <Route path="product/:productId" element={<Product/>} />
          <Route path="/category/:categoryId" element={<Category/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
