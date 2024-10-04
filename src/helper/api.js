import axios from 'axios'

const baseUrl = "https://dummyjson.com/"

export const getAllProducts = async (limit,skip) =>{
    
    const resp = await axios.get( `${baseUrl}products`,{
        params:{
            limit,
            skip
        }
    })
    return resp.data
}

export const getSingleProduct = async(id)=>{
    
    try {

        const resp = await axios.get(`${baseUrl}products/${id}`)
        return resp.data
    } catch (error) {
        return error
    }
    
}

export const getAllCategories = async()=>{
    const resp = await axios.get(`${baseUrl}products/categories`)
    return resp.data
}
export const getProductsByCategory = async(id)=>{
    const resp = await axios.get(`${baseUrl}products/category/${id}`)
    return resp.data.products
}



export const getToken = async(userIfno) => {
    const resp =await axios.post(`${baseUrl}auth/login`,userIfno)
    return resp.data.accessToken
}

export const getDataUsingToken = async(token)=>{
    try {
        const resp = await axios.get(`${baseUrl}user/me`,{
            headers:{
                Authorization:`Bearer ${token}` 
            }
        })
        if(!resp.status===200 && !resp.status===201){
            throw new Error("Could not get data")
        }
        else{
            return resp.data
        }
        
    } catch (error) {
        
        return false
    }
    
}