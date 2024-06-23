import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthContexts";


function useFetch(url) {


    const {user}= useContext(authContext)

    const BASE_URL = import.meta.env.VITE_BASE_URL

    if(url === ''){
        return 
    }

    const [data , setData] = useState([])
    const [loading ,setLoading] = useState(false);
    const [err , setErr] = useState();

    const fetchData = async()=>{

        setLoading(true);
        try {
            const response = await axios.get(BASE_URL+url)

            setData(response.data)
           
        } catch (error) {
            setErr(error)
            console.log(error);

        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData()
    },[])

    const reFetch = async()=>{
        setLoading(true);
        try {
            const response = await axios.get(BASE_URL+url,{
                withCredentials: true // Add this option to include cookies
            })
            setData(response.data)
        } catch (error) {
            setErr(error)
        }
        setLoading(false)
    }
    return {data , err , loading , reFetch };
}

export default useFetch;