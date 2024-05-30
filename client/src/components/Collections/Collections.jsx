import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import { authContext } from '../../context/AuthContext';
import SkeletonLoading from '../Skeleton/Skeleton';
import './collections.css';

function Collections(props) {
    const [data, setData] = useState(Array(15).fill({})); // Simulate 8 items for skeleton loading
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(authContext);

    const fetchItems = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('/items');
                setData(response.data);
                setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
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
            <Grid container spacing={5} style={{ width: '80vw' }} justifyContent="space-evenly">
                {data?.map((item, i) => (
                    <Grid item xs={2.4} key={i}>
                        {isLoading ? (
                            <SkeletonLoading />
                        ) : (
                            <div className="displayItem" onClick={() => handleViewItem(item._id)}>
                                <div className="image">
                                    {item.images && item.images[0] ? (
                                        <img src={item.images[0]} alt="" />
                                    ) : (
                                        <SkeletonLoading /> // or a placeholder image if you prefer
                                    )}
                                </div>
                                <div className="details">
                                    <h3>{item.brandName}</h3>
                                    <p>{item.name}</p>
                                    <div className="pay">
                                        {item.offerPrice ? (
                                            <>
                                                <p className="price">₹{item.offerPrice}</p>
                                                <strike>{item.price}</strike>
                                                <p className="offer">
                                                    {((item.price - item.offerPrice) / item.price * 100).toFixed(0)}% OFF
                                                </p>
                                            </>
                                        ) : (
                                            <p className="price">₹{item.price}</p>
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
