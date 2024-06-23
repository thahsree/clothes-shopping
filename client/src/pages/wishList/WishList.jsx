import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import axios from '../../axios/axios';
import { authContext } from '../../context/AuthContexts'; // added AuthContext's' due to type error 
import './wishlist.css';

function WishList(props) {


    const { user } = useContext(authContext)

    const BASE_URL = import.meta.env.VITE_BASE_URL

    const axiosResponse = async () => {


        const response = await axios.get(BASE_URL + '/wishlist', {
            headers: {
                Authorization: user ? `Bearer ${user?.accessToken}` : ''
            }
        })

        console.log(response);
    }




    useEffect(() => {

        if (user) {
            axiosResponse();
            console.log(user);
        }


    }, [user])

    return (
        <div className='wishlist'>

            {
                user ? (
                    <>
                        <div className="head">
                            <h4>My WishList</h4>
                            <span className="count">21 Items</span>
                        </div>
                        <div className="item">
                            <Card sx={{ width: 245, marginBottom: '30px' }}>
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image="http://res.cloudinary.com/db17ho8ub/image/upload/v1714769004/upload/omybe1mipxpxu8o8x48q.jpg"
                                    alt="images"
                                    sx={{ width: '100%', objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <div className="details">
                                        <p>Slim fit T-shirt </p>
                                        <div className="pay">
                                            <p className="price">₹899</p>
                                            <strike>₹1299</strike>
                                            <p className="offer">
                                                20% OFF
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardActionArea>
                                    <div className="button">MOVE TO BAG</div>
                                </CardActionArea>
                            </Card>
                        </div>
                    </>
                ) : (
                    'PLEASE LOGIN FIRST'
                )
            }
        </div>
    );
}

export default WishList;
