import { useParams } from "react-router-dom";
import './Category.css'
function Category() {
    const {categoryId} = useParams()
    return (  
        <main className="category-page">
            {categoryId}
        </main>
    );
}

export default Category;