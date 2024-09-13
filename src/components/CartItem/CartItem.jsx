import { useContext } from 'react'
import {ThemeContext} from 'context/ThemeContext/ThemeContext'
import { Link } from 'react-router-dom'
import './CartItem.css'
function CartItem({id,image,title,category,discountPercentage,price}) {
    const {isDark} = useContext(ThemeContext)
    let newPrice= price - (price*(discountPercentage/100))
    
    newPrice = newPrice.toFixed(2)
    return (  
        <div className={isDark?'cart-item dark':'cart-item'}>
            <div className='image-place'>
                <img src={image} className='product-image'/>
            </div>
            <div className='textures'>
                <p className='category'>{category}</p> 
                <p className='title'> <Link to={`/product/${id}`}>{title}</Link> </p>
                <div className='price-buy'>
                    <div className='prices'>
                        <p className='new-price'> ${newPrice}</p>
                        <p className='old-price'><del>${price}</del> <b>{discountPercentage}%</b></p>
                    </div>
                    <button className='buy-cart'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;