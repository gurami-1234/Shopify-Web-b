import { useParams } from "react-router-dom";
import { getSingleProduct } from "helper/api";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
function Product() {
    const [productData,setProductData] = useState({})
    const {productId} = useParams()
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getSingleProduct(productId)
            .then((data)=>setProductData(data))
            .finally(()=>setIsLoading(false))
    },[])
    return (  
    
        <div>
           {
            isLoading?
                <BounceLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
                :<>
                    <h1>Single Product Page</h1>
                    <h1>Product ID IS: {productId}</h1>
                    <img src={productData.thumbnail} alt="" />
                    <h2>{productData.title}</h2>
                </>
           }
        </div>
    );
}

export default Product;