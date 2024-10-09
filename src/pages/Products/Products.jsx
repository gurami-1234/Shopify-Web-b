import ProductsLayout from "./Layout/ProductLayout";
import { CartItem }from 'components'
import { useEffect, useState } from "react";
import { getAllProducts } from "helper/api";
import { BounceLoader } from "react-spinners";
function Products() {

    const [productList,setProductList] = useState([])
    const [isLoading,setIsloading] = useState(false)
    const [sorting,setSorting] = useState("default") //default - asc - desc

    useEffect(()=>{
        setIsloading(true)
        getAllProducts(194,0,sorting)
            .then((data)=>setProductList(data.products))
            .finally(()=>setIsloading(false))
    },[sorting])
    return (  
        <ProductsLayout sorting={sorting} setSorting={setSorting}>
            {
                isLoading? <BounceLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>:
                (  
                    productList.map((el)=>
                        <CartItem 
                            key={el.id}
                            title={el.title} 
                            id={el.id}  
                            category={el.category} 
                            image={el.thumbnail} 
                            price={el.price} 
                            discountPercentage={el.discountPercentage}
                        />)
                )
            }
        </ProductsLayout>
    );
}

export default Products;