import { useContext, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Categories from './pages/Categories/Categories'
import Products from './pages/Products/Products'
import { Routes,Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

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
