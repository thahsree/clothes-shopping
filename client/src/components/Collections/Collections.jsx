import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './collections.css';


function Collections(props) {

    const location = useLocation()
    const navigate = useNavigate()

    const { data, err, loading, reFetch } = useFetch('https://clothes-shopping-1.onrender.com/items')

    const handleViewItem = (id) => {

        navigate(`/products/${id}`, { state: { ...location.state, id } });
    }
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
