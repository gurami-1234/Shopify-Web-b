import ProductsLayout from "./Layout/ProductLayout";
import CartItem from '../../components/CartItem/CartItem'
import { useEffect, useState } from "react";
import { getAllProducts } from "../../helper/api";
function Products() {

    const [productList,setProductList] = useState([])

    useEffect(()=>{
        getAllProducts(194,0).then((data)=>setProductList(data.products))
    },[])
    return (  
        <ProductsLayout>
            {
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
            }
        </ProductsLayout>
    );
}

export default Products;