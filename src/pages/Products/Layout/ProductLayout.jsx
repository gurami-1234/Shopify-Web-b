import { useContext } from 'react';
import './ProductsLayout.css'
import { ThemeContext } from 'context';
function ProductsLayout({children}) {
    const {isDark} = useContext(ThemeContext)
    return (  
        <div className={isDark?"products-layout dark":"products-layout"}>
            <div className='header'>
                <p className='title'>Products</p>
            </div>
            <div className='products-list'>
                {children}
            </div>
            
        </div>
    );
}

export default ProductsLayout;