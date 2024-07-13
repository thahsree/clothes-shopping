import CloseIcon from '@mui/icons-material/Close';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import axios from '../../axios/axios';
import PleaseLogIn from '../../components/PleaseLoginPage/PleaseLogIn';
import WishListEmpty from '../../components/PleaseLoginPage/WishListEmpty';
import { authContext } from '../../context/AuthContexts'; // added AuthContext's' due to type error 
import { modeContext } from '../../context/DarkMode';
import { dataContext } from '../../context/DataContext';
import usePrivateFetch from '../../hooks/usePrivateFetch';
import './wishlist.css';

function WishList(props) {


    const { user } = useContext(authContext)
    
    const { userData, dispatch } = useContext(dataContext)

    const userID = user?.details?._id
    const { reFetch , setData} = usePrivateFetch(`/users/${userID}`)

    const { data, loading, err } = usePrivateFetch(user ? '/wishlist' : '')

    const [wishListItems, setWishListItems] = useState([])

    const BASE_URL = import.meta.env.VITE_BASE_URL


    const handleRemoveWishLIstItem = async(id)=>{

        
        try {
            const response = await axios.delete(BASE_URL + `/wishlist/${id}`, {
                headers: {
                    Authorization: user ? `Bearer ${user?.accessToken}` : ''
                }
            })
            const filteredWishlist = wishListItems.filter(item=> item._id !== id)
            setWishListItems(filteredWishlist)
            reFetch()



        } catch (error) {
            
            console.log(error);
            
        }
    }
    


    useEffect(() => {

        setWishListItems(data)
        console.log('====================================');
        console.log(data);
        console.log('====================================');

    }, [data])

    const {darkMode} = useContext(modeContext)

    return (
        <div className={darkMode? 'wishlist dark' : 'wishlist'}>
           
            {
                user && wishListItems.length > 0 ? (
                    <>
                        <div className="head">
                            <h4>My WishList</h4>
                            <span className="count">{wishListItems.length} Items</span>
                        </div>
                        <div className="item">

                            {
                                wishListItems.map((item, i) => (

                                    <Card sx={{ width: 245, marginBottom: '30px',  position:'relative' }} key={i}>

                                        <div className="item_remove" onClick={()=> handleRemoveWishLIstItem(item._id)}>
                                            <CloseIcon className='item-remove_icon' />
                                        </div>
                                        <CardMedia
                                            component="img"
                                            height="280"
                                            image={item?.product[0]?.images[0]}
                                            alt="images"
                                            sx={{ width: '100%', objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <div className="details">
                                                <p>{item?.product[0]?.name} </p>
                                                <div className="pay">
                                                    <p className="price">₹{item?.product[0].offerPrice}</p>
                                                    <strike>₹{item?.product[0]?.price}</strike>
                                                    <p className="offer">
                                                    ({((item?.product[0]?.price - item?.product[0]?.offerPrice) / item?.product[0]?.price * 100).toFixed(0)}% OFF)
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardActionArea>
                                            <div className="button">MOVE TO BAG</div>
                                        </CardActionArea>
                                    </Card>
                                ))
                            }
                        </div>
                    </>
                ) : user && wishListItems.length<1 ? (
                    <WishListEmpty/>
                ):<PleaseLogIn/>
            }
        </div>
    );
}

export default WishList;
