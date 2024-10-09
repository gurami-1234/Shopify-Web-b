import { useContext } from 'react';
import './ProductsLayout.css'
import { ThemeContext } from 'context';
function ProductsLayout({children,sorting,setSorting}) {
    const {isDark} = useContext(ThemeContext)
    return (  
        <div className={isDark?"products-layout dark":"products-layout"}>
            <div className='header'>
                <p className='title'>Products</p>
                <select name="sorting"  onChange={(e)=>setSorting(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="desc">Price (High to Low)</option>
                </select>
            </div>
            <div className='products-list'>
                {children}
            </div>
            
        </div>
    );
}

export default ProductsLayout;