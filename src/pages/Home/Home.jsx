import CartItem from "../../components/CartItem/CartItem";
import ProductLayout from "../../layouts/ProductsLayout/ProductLayout";
import { getAllProducts } from "../../helper/api";
import { useEffect, useState } from "react";



function Home() {
    const [trendingProductList,setTrendingProductList] = useState([])
    const [newArrivalsProductList,setNewArrivalProductList] = useState([])
    useEffect(()=>{
        getAllProducts(8,7).then((data)=>setTrendingProductList(data.products ))
        getAllProducts(8,50).then((data)=>setNewArrivalProductList(data.products ))
    },[])
    return (  
        <main className="home-page">
            
            <ProductLayout layoutTitle="Trending Products">
                {
                    trendingProductList.map((el)=>
                        <CartItem 
                            id={el.id} 
                            image={el.thumbnail}
                            title={el.title}
                            category={el.category} 
                            discountPercentage={el.discountPercentage}
                            price={el.price}
                        />
                    )
                }
            </ProductLayout>

            <ProductLayout layoutTitle="New Arrival">
                {
                    newArrivalsProductList.map((el)=>
                        <CartItem 
                            id={el.id} 
                            image={el.thumbnail}
                            title={el.title}
                            category={el.category} 
                            discountPercentage={el.discountPercentage}
                            price={el.price}
                        />
                    )
                }
            </ProductLayout>

        </main>
    );
}

export default Home;