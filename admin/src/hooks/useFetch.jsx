import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()

    const cookies = new Cookies()

    const token = cookies.get('accessToken')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: token ?`Bearer ${token}` : ''
                    }
                })
                console.log("RESPONSE",response);
                setData(response.data)
            } catch (error) {
                setErr(error)
                console.log(error);
            }
            setLoading(false)
        }

        fetchData()
    }, [])

    const reFetch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url, {
                withCredentials: true // Add this option to include cookies
            })
            setData(response.data)
        } catch (error) {
            setErr(error)
        }
        setLoading(false)
    }

    return { data, loading, err, reFetch }
}

export default useFetch;