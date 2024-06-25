import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import CartContent from '../../components/CartContent/CartContent';
import EmptyCart from '../../components/CartContent/EmptyCart';
import CartNav from '../../components/CartNav/CartNav';
import { authContext } from '../../context/AuthContexts';
import usePrivateFetch from '../../hooks/usePrivateFetch';
import './CartPage.css';

function CartPage(props) {


    const {user } = useContext(authContext)
    const { data, loading, err } = usePrivateFetch(user?'/cart':'')

    const [cartItems, setCartItems] = useState([])

    const [fetchedProduct, setFetchedProduct] = useState([])




    const BASE_URL = import.meta.env.VITE_BASE_URL

    const fetchCartItems = async () => {

        try {
            const items = await Promise.all(data.map(async (item) => {
                const response = await axios.get(BASE_URL + `/items/${item.productID}`)
                return { ...item, product: response.data } // for getting user cart-items, qty, images
            }))
            setCartItems(items)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (data?.length) {
            fetchCartItems()
        }
    }, [data])
    
    return (
        <div className='cart'>
            <CartNav />

            {
                cartItems.length>0 ?<CartContent cartItems={cartItems} setCartItems={setCartItems}/> :<EmptyCart/>
            }
            
        </div>
    );
}

export default CartPage;