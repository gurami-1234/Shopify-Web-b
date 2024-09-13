import { useContext } from "react";
import {Footer,Navbar} from 'components'
import { Routes,Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import {Home,Categories,Product,Products,NotFound} from 'pages'

function App() {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className={isDark?"App dark":"App"}>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="categories" element={<Categories/>} />
          <Route path="products" element={<Products/>} />
          <Route path="product/:productId" element={<Product/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
        

    </div>
  );
}

export default App;
