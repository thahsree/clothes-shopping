import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import { authContext } from '../../context/AuthContexts';
import { loadingContext } from '../../context/LoadingContext';
import { productLoadingContext } from '../../context/ProductLoadingContext';
import SkeletonLoading from '../Skeleton/Skeleton';
import './collections.css';

function Collections(props) {
    const [data, setData] = useState(Array(15).fill({})); // Simulate 15 items for skeleton loading
    const location = useLocation();
    const navigate = useNavigate();

    const { user } = useContext(authContext);
    const { loading, dispatch } = useContext(loadingContext)
    const {state , dispatch: productLoading} = useContext(productLoadingContext)

    const { recommended, highToLow, lowToHigh, whatsNew, popularity, customerRating, betterDiscount } = state;

    const fetchItems = async () => {
        try {
            dispatch({ type: 'LOADING' });

            const response = await axios.get('/items');
            setData(response.data);
            dispatch({ type: 'SUCCESS' });
           

        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR', payload: error.message });
        }
    };


    

    const sortedByDiscount = data.sort((a, b) => {
        const discountA = ((a.price - a.offerPrice) / a.price) * 100;
        const discountB = ((b.price - b.offerPrice) / b.price) * 100;
        return discountA - discountB;
    });

    const applySorting =(items)=>{

        if (recommended) {
            // Implement sorting logic for 'recommended'
            return items
        }
        if (highToLow) {
            return items.sort((a, b) => {
                // Use offerPrice if available, otherwise use price
                const priceA = a.offerPrice !== undefined && a.offerPrice !== null ? a.offerPrice : a.price;
                const priceB = b.offerPrice !== undefined && b.offerPrice !== null ? b.offerPrice : b.price;
                return priceB - priceA; 
            });
        }
        if (lowToHigh) {
            return items.sort((a, b) => {
                // Use offerPrice if available, otherwise use price
                const priceA = a.offerPrice !== undefined && a.offerPrice !== null ? a.offerPrice : a.price;
                const priceB = b.offerPrice !== undefined && b.offerPrice !== null ? b.offerPrice : b.price;
                return priceA - priceB; 
            });
        }
        if (betterDiscount) {
            return items.sort((a, b) => {
                // Calculate discount percentage
                const discountA = ((a.price - (a.offerPrice || a.price)) / a.price) * 100;
                const discountB = ((b.price - (b.offerPrice || b.price)) / b.price) * 100;
                return discountB - discountA; // Higher discount first
            });
        }
        if (whatsNew) {
            return items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Newest first
        }
      
        return items;
    }
    
    const sortedData = applySorting(data)

    useEffect(() => {
        fetchItems();
        console.log("PRODUCT LOADING",state);

    }, []);

    const handleViewItem = (id) => {
        navigate(`/products/${id}`, { state: { ...location.state, id } });
    };

    return (
        <div className='collectionsMain'>
            <Grid container spacing={2} style={{ width: '80vw' }} justifyContent="space-evenly">
                {sortedData?.map((item, i) => (
                    <Grid item xs={2.4} key={i}>
                        {loading ? (
                            <SkeletonLoading type='cards' />
                        ) : (
                            <div className="displayItem" onClick={() => handleViewItem(item._id)}>
                                <div className="image">
                                    {item.images && item.images[0] ? (
                                        <img src={item.images[1]} alt="" />
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
