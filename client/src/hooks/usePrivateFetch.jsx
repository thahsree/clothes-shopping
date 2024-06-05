import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthContext";
import { dataContext } from "../context/DataContext";

function usePrivateFetch(url) {


    const {user} = useContext(authContext)
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState();

    const {userData , dispatch} = useContext(dataContext)


    const BASE_URL = import.meta.env.VITE_BASE_URL
    

    if (!url || url.includes('undefined')) {
        return { data: null, loading: false, err: 'URL NEEDED' };
    }

    if(!user){
        return
    }

    
    async function fetchData(){

        setLoading(true)
        try {
            const response = await axios.get(BASE_URL+url,{
                headers: {
                    Authorization: user?`Bearer ${user?.accessToken}` : ''
                }
            })
            setData(response.data)
        } catch (error) {
            
            dispatch({type:'FETCH_FAILED', payload:error})
            setErr(error)
            console.log(error);
        }
        setLoading(false);
    }
    
    async function reFetch(){

        dispatch({type:'FETCH_START'})
        setLoading(true);

        try {

            const response  = await axios.get(BASE_URL+url,{
                headers:{
                    Authorization: user? `Bearer ${user.accessToken}`:''
                }
            })

           
            dispatch({type:'FETCH_SUCCESS', payload:response.data})
            
        } catch (error) {
            dispatch({type:'FETCH_FAILED', payload:error})
            setErr(error)
            console.log(error);
        }
        setLoading(false);
    }

   useEffect(()=>{
    fetchData()
   },[])

    return { data , err , loading , reFetch , fetchData}
}


export default usePrivateFetch;