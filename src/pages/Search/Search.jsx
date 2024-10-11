import { SearchContext } from 'context'
import React, { useContext, useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchDataInDB } from "helper/api";
import ProductLayout from 'layouts/ProductsLayout/ProductLayout';
import { CartItem } from 'components';
import { BeatLoader } from 'react-spinners';
const Search = () => {
    const [searchData,setSearchData] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const {search,setSearch} = useContext(SearchContext)
    
    useEffect(()=>{
            if(searchParams.get("q")){
                setSearch(searchParams.get("q"))
            }
            // setSearchParams({q:search})
            searchDataInDB(search)
                .then((res)=>setSearchData(res))
            
    },[])
  return (
    <ProductLayout>
        {
            searchData.length===0?<BeatLoader />:(
                searchData.map((el)=>
                    <CartItem 
                        id={el.id}
                        key={el.id} 
                        image={el.thumbnail}
                        title={el.title}
                        category={el.category} 
                        discountPercentage={el.discountPercentage}
                        price={el.price}
                    />)
            )
        }
    </ProductLayout>
  )
}

export default Search