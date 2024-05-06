import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {

    const [data , setData] = useState([])
    const [loading ,setLoading] = useState(false);
    const [err , setErr] = useState();

    const fetchData = async()=>{

        setLoading(true);
        try {
            const response = await axios.get(url,{
                withCredentials:true  // for adding browser cookie
            })

            setData(response.data)
        } catch (error) {
            setErr(error)
            console.log(error);

        }
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