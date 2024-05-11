import axios from "axios";

import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";

function usePrivateFetch(url) {


    const {user} = useContext(authContext)
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState();

    

    if (!url || url.includes('undefined')) {
        return { data: null, loading: false, err: 'URL NEEDED' };
    }


    async function fetchData(){

        setLoading(true)
        try {
            const response = await axios.get(url,{
                headers: {
                    Authorization: user?`Bearer ${user?.accessToken}` : ''
                }
            })

            setData(response.data)
        } catch (error) {
            
            setErr(error)
            console.log(error);
        }
        setLoading(false);
    }

    
    async function reFetch(){

        setLoading(true);

        try {

            const response  = axios.get(url,{
                headers:{
                    Authorization: user? `Bearer ${user.accessToken}`:''
                }
            })

            setData(response.data)
            
        } catch (error) {
            setErr(error)
            console.log(error);
        }
        setLoading(false);
    }

   

    return { data , err , loading , reFetch}
}


export default usePrivateFetch;