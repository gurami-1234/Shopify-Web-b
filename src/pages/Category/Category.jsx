import { useParams } from "react-router-dom";
import './Category.css'
import ProductLayout from "layouts/ProductsLayout/ProductLayout";
import { useContext, useEffect, useState } from "react";
import { getProductsByCategory } from "helper/api";
import { CartItem } from "components"; 
import { ThemeContext } from "context/ThemeContext/ThemeContext";
function Category() {
    const {categoryId} = useParams()
    const {isDark} = useContext(ThemeContext)
    const [productsList,setProductsList] = useState([])
    useEffect(()=>{
        getProductsByCategory(categoryId)
            .then((data)=>setProductsList(data))
    },[])
    return (  
        <main className={isDark?"category-page dark":"category-page"}>
            <div className="title"><p>{categoryId}</p></div>
            <ProductLayout>
                {
                    productsList.map((el)=>(
                        <CartItem 
                            title={el.title}
                            price={el.price}
                            discountPercentage={el.discountPercentage}
                            image={el.thumbnail}
                            id={el.id}

                        />
                    ))
                }
            </ProductLayout>
        </main>
    );
}

export default Category;