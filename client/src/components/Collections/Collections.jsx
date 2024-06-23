import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import { authContext } from '../../context/AuthContexts';
import { loadingContext } from '../../context/LoadingContext';
import SkeletonLoading from '../Skeleton/Skeleton';
import './collections.css';

function Collections(props) {
    const [data, setData] = useState(Array(15).fill({})); // Simulate 8 items for skeleton loading
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = useContext(authContext);
    const { loading, dispatch } = useContext(loadingContext)

    const fetchItems = async () => {
        try {
            dispatch({ type: 'LOADING' });

            const response = await axios.get('/items');
            setData(response.data);
            dispatch({ type: 'SUCCESS' });
            // setTimeout(async () => {



            // }, 3000)


        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR', payload: error.message });
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleViewItem = (id) => {
        navigate(`/products/${id}`, { state: { ...location.state, id } });
    };

    return (
        <div className='collectionsMain'>
            <Grid container spacing={2} style={{ width: '80vw' }} justifyContent="space-evenly">
                {data?.map((item, i) => (
                    <Grid item xs={2.4} key={i}>
                        {loading ? (
                            <SkeletonLoading type='cards' />
                        ) : (
                            <div className="displayItem" onClick={() => handleViewItem(item._id)}>
                                <div className="image">
                                    {item.images && item.images[0] ? (
                                        <img src={item.images[0]} alt="" />
                                    ) : (
                                        ''// or a placeholder image if you prefer
                                    )}
                                </div>
                                <div className="displayItem_details">
                                    <h3>{item.brandName}</h3>
                                    <p>{item.name}</p>
                                    <div className="displayItem_pay">
                                        {item?.offerPrice ? (
                                            <>
                                                <p className="displayItem_price">₹{item?.offerPrice}</p>
                                                <strike>{item.price}</strike>
                                                <p className="displayItem_offer">
                                                    {((item.price - item.offerPrice) / item.price * 100).toFixed(0)}% OFF
                                                </p>
                                            </>
                                        ) : (
                                            <p className="displayItem_price">₹{item?.price}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Collections;
