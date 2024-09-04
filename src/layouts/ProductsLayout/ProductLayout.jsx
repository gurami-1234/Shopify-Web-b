import { useContext } from 'react';
import './ProductLayout.css'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
function ProductLayout({children,layoutTitle}) {
    const {isDark,setIsDark} = useContext(ThemeContext)
    return (  
        <div className={isDark?"product-layout dark":"product-layout"}>
            <h1>{layoutTitle}</h1>
            <div className="children">
                {children}
            </div>
        </div>
    );
}

export default ProductLayout;