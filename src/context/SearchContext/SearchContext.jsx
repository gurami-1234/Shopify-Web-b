import React, { createContext,  useState } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'
export const SearchContext = createContext()

const SearchContextComponent = ({children}) => {
    const [searchParams,setSearchParams] = useSearchParams()
    const [search,setSearch] = useState("")
    const navigate = useNavigate()
    const searchDataDB = ()=>{
        navigate('/search')
    }
    const obj = {
        search,
        setSearch,
        searchDataDB
    }
    

    return (
        <SearchContext.Provider value={ obj }>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextComponent