import { useEffect, useState } from 'react';
import './categories.css'
import { Link } from 'react-router-dom';
import { getAllCategories } from 'helper/api';
function Categories() {
    const [categoryList,setCategoryList] = useState([])
    useEffect(()=>{
        getAllCategories()
            .then((data)=>setCategoryList(data))
    },[])
    return ( 
        <main className="categories-page">
            <p className='title'>Categories</p>
            <div className='category-list'>
                {
                    categoryList.map((el)=>(
                        <div className='category-item' key={el.slug}>
                            <p>{el.name}</p>
                            <Link to={`/category/${el.slug}`}>View Products</Link>
                        </div>
                    ))
                }
               
                
            </div>
        </main>
     );
}

export default Categories;