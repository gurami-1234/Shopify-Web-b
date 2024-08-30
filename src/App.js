import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Categories from './pages/Categories/Categories'
import Products from './pages/Products/Products'
import { Routes,Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route index element={<Home/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="products" element={<Products/>} />

      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
