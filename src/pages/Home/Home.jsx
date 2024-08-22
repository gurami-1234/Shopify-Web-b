import CartItem from "../../components/CartItem/CartItem";
import ProductLayout from "../../layouts/ProductsLayout/ProductLayout";

const productList = [
    {
        id:1,
        title: "Essence Mascara Lash Princess",
        category: "beauty",
        price: 9.99,
        discountPercentage: 7.17,
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        category: "beauty",
        price: 19.99,
        discountPercentage: 5.5,
    },
    {
        id: 3,
        title: "Powder Canister",
        category: "beauty",
        price: 14.99,
        discountPercentage: 18.14,
    },
    {
        id: 4,
        title: "Red Lipstick",
        category: "beauty",
        price: 12.99,
        discountPercentage: 19.03,
    },
    {
        id:5,
        title: "Essence Mascara Lash Princess",
        category: "beauty",
        price: 9.99,
        discountPercentage: 7.17,
    },
    {
        id: 6,
        title: "Eyeshadow Palette with Mirror",
        category: "beauty",
        price: 19.99,
        discountPercentage: 5.5,
    },
    {
        id: 7,
        title: "Powder Canister",
        category: "beauty",
        price: 14.99,
        discountPercentage: 18.14,
    },
    {
        id: 8,
        title: "Red Lipstick",
        category: "beauty",
        price: 12.99,
        discountPercentage: 19.03,
    }

]


function Home() {
    return (  
        <main className="home-page">
            
            <ProductLayout layoutTitle="Trending Products">
                {
                    productList.map((el)=>
                        <CartItem 
                            id={el.id} 
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