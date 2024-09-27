import { useContext } from 'react';
import { ThemeContext } from 'context';

import './ProductLayout.css'
function ProductLayout({children,layoutTitle}) {
    const {isDark} = useContext(ThemeContext)
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