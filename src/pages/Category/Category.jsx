import { useParams } from "react-router-dom";
import ProductLayout from "layouts/ProductsLayout/ProductLayout";
import { useContext, useEffect, useState } from "react";
import { getProductsByCategory } from "helper/api";
import { CartItem } from "components"; 
import { ThemeContext } from "context";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import './Category.css'

function Category() {
    const {categoryId} = useParams()
    const {isDark} = useContext(ThemeContext)
    const [isLoading,setIsLoading]=useState(false)
    const [productsList,setProductsList] = useState([])
    useEffect(()=>{
        setIsLoading(true)
        getProductsByCategory(categoryId)
            .then((data)=>setProductsList(data))
            .finally(()=>setIsLoading(false))
    },[])
    return (  
        <main className={isDark?"category-page dark":"category-page"}>
            {
                isLoading?<BounceLoader size={50} />:(
                    <>
                        <div className="title"><p>{categoryId}</p></div>
                        {  
                        productsList.length===0?<h1>Could not find products on this category <Link to="/categories">Back To Categories</Link></h1>:
                            (<ProductLayout>
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
                            </ProductLayout>)}
                    </>
                   
                )
            }
           
        </main>
    );
}

export default Category;