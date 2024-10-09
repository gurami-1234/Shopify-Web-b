import React,{useContext} from 'react'
import {Home,Categories,Product,Products,NotFound,Category,Profile} from 'pages'
import { Routes,Route, Navigate} from "react-router-dom";
import { AuthContext } from 'context';
import MainLayout from 'layouts/MainLayout/MainLayout';

const MainRoutes = () => {
  const {isAuth} = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>} /> 
        <Route path="categories" element={<Categories/>} />
        <Route path="products" element={<Products/>} />
        <Route path="profile" element={isAuth ? <Profile/> : <Navigate to="/" />} />
        <Route path="product/:productId" element={<Product/>} />
        <Route path="/category/:categoryId" element={<Category/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes