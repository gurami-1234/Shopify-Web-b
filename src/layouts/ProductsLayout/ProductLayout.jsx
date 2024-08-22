import './ProductLayout.css'
function ProductLayout({children,layoutTitle}) {
    return (  
        <div className="product-layout">
            <h1>{layoutTitle}</h1>
            <div className="children">
                {children}
            </div>
        </div>
    );
}

export default ProductLayout;