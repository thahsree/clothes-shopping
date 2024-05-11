import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthContext";


function useFetch(url) {


    const {user}= useContext(authContext)

    if(url === ''){
        return 
    }

    const [data , setData] = useState([])
    const [loading ,setLoading] = useState(false);
    const [err , setErr] = useState();

    const fetchData = async()=>{

        setLoading(true);
        try {
            const response = await axios.get(url)

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
            const response = await axios.get(url,{
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