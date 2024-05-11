import Grid from '@mui/material/Grid';
import axios from 'axios';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';
import './collections.css';


function Collections(props) {

    const [data , setData ] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    // const { data, err, loading, reFetch } = useFetch('http://localhost:4000/items')

    const {user} = useContext(authContext)

    const fetchUser = async()=>{
        try {
            const response = await axios.get('http://localhost:4000/items')
            setData(response.data)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        
       fetchUser()
    },[])

    const handleViewItem = (id) => {

        navigate(`/products/${id}`, { state: { ...location.state, id } });
    }

    useEffect(()=>{
        console.log(PORT);
    })
    return (
        <div className='collectionsMain'>
            <Grid container spacing={5} style={{ width: '80vw' }} justifyContent="space-evenly">
                {
                    data?.map((item, i) => (
                        <Grid item xs={2.4} key={i}>
                            <div className="displayItem" onClick={() => handleViewItem(item._id)}>
                                <div className="image">
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div className="details">
                                    <h3>{item.brandName}</h3>
                                    <p>{item.name}</p>
                                    <div className="pay">
                                        {item.offerPrice ? (
                                            <>
                                                <p className="price">₹{item.offerPrice}</p>
                                                <strike>{item.price}</strike>
                                                <p className="offer">({((item.price - item.offerPrice) / item.price * 100).toFixed(0)}% OFF)</p>
                                            </>
                                        ) : <p className="price">₹{item.price}</p>} 
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default Collections;
