import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../helper/api";
import { useEffect, useState } from "react";
function Product() {
    const [productData,setProductData] = useState({})
    const {productId} = useParams()
    useEffect(()=>{
        getSingleProduct(productId)
            .then((data)=>setProductData(data))
    },[])
    return (  
        <div>
            <h1>Single Product Page</h1>
            <h1>Product ID IS: {productId}</h1>
            <img src={productData.thumbnail} alt="" />
            <h2>{productData.title}</h2>
        </div>
    );
}

export default Product;