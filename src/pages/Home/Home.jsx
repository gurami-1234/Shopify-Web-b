import ProductLayout from "layouts/ProductsLayout/ProductLayout";
import { getAllProducts } from "helper/api";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { CartItem} from 'components' 


function Home() {
    const [trendingProductList,setTrendingProductList] = useState([])
    const [newArrivalsProductList,setNewArrivalProductList] = useState([])
    const [isLoadingTR,setIsLoadingTR] = useState(false)
    const [isLoadingNew,setIsLoadingNew] = useState(false)
    useEffect(()=>{
        setIsLoadingTR(true)
        setIsLoadingNew(true)
        getAllProducts(8,7)
            .then((data)=>setTrendingProductList(data.products ))
            .finally(()=>setIsLoadingTR(false))
        getAllProducts(8,50)
            .then((data)=>setNewArrivalProductList(data.products ))
            .finally(()=>setIsLoadingNew(false))

    },[])
    return (   
        <main className="home-page">
            
            <ProductLayout layoutTitle="Trending Products">
                {
                    isLoadingTR?
                        <BounceLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
                        
                        :(
                        trendingProductList.map((el)=>
                            <CartItem 
                                id={el.id}
                                key={el.id} 
                                image={el.thumbnail}
                                title={el.title}
                                category={el.category} 
                                discountPercentage={el.discountPercentage}
                                price={el.price}
                            />
                        )
                    )
                }
            </ProductLayout>

            <ProductLayout layoutTitle="New Arrival">
                {
                    isLoadingNew?
                    <BounceLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
                    :(
                        newArrivalsProductList.map((el)=>
                            <CartItem 
                                id={el.id} 
                                key={el.id}
                                image={el.thumbnail}
                                title={el.title}
                                category={el.category} 
                                discountPercentage={el.discountPercentage}
                                price={el.price}
                            />
                        )
                    )
                }
            </ProductLayout>

        </main>
    );
}

export default Home;