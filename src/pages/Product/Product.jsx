import { useParams } from "react-router-dom";
import { getSingleProduct } from "helper/api";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { NotFound } from "pages";
function Product() {
    const [productData,setProductData] = useState({})
    const {productId} = useParams()
    const [isError,setIsError] = useState({
        status:0,
        message:""
    })
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getSingleProduct(productId)
            .then((data)=>{
                if(data.code==="ERR_BAD_REQUEST"){
                    setIsError({status:data.status,message:data.message})
                }else{
                    setProductData(data)
                }
                
            })
            .finally(()=>setIsLoading(false))
    },[])
    return (  
        <>
        
            <div>
            {
                isLoading?
                    <BounceLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
                    :isError.status!==0?<NotFound/>:
                        (<>
                            <h1>Single Product Page</h1>
                            <h1>Product ID IS: {productId}</h1>
                            <img src={productData.thumbnail} alt="" />
                            <h2>{productData.title}</h2>
                        </>)
            }
            </div>
        </>
        
    );
}

export default Product;