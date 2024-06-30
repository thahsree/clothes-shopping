import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthContexts';
import { dataContext } from '../../context/DataContext';
import usePrivateFetch from '../../hooks/usePrivateFetch';
import AddAddressInput from '../AddAddressInput/AddAddressInput';
import './cartContent.css';


function CartContent({ cartItems, setCartItems }) {


    const { userData } = useContext(dataContext)
    const totalMRP = cartItems.reduce((total, item) => total + item?.product?.price, 0);
    const discountedMRP = cartItems.reduce((total, item) => total + item?.product?.offerPrice, 0);
    

    const [showAddressInput, setShowAddressInput] = useState(false);

    const BASE_URL = import.meta.env.VITE_BASE_URL

    const { user } = useContext(authContext)
    const userID = user?.details?._id

    const { reFetch, setData } = usePrivateFetch(`/users/${userID}`)



    const handleCheckout = async (e) => {
        e.preventDefault();
        
        if(userData?.details?.address?.length <1){

            alert('PLEASE ADD AN ADDRESS')
            return 
        }

        const amount = (discountedMRP + 20) * 100;
        const currency = "INR";
        const receipt = "RES_123123";
    

        const itemArr = cartItems.map(item => ({
            id: item.productID,
            count: 1,
            size: item.size.toString()
        }));
    
        try {
            const response = await fetch(`${BASE_URL}/checkout/checkoutProduct`, {
                method: 'POST',
                body: JSON.stringify({
                    amount,
                    currency,
                    receipt,
                    itemArr
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: user ? `Bearer ${user?.accessToken}` : ''
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to create order');
            }
    
            const order = await response.json();
    
            const options = {
                key: "rzp_test_OQX01X7xEcY9Bk", // Enter the Key ID generated from the Dashboard
                amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency,
                name: "Fashion Galleria", // your business name
                description: "Total cart amount",
                image: "https://example.com/your_logo",
                order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: async function (response) {
                    const body = {
                        ...response,
                        itemArr
                    };
    
                    const validateResponse = await fetch(`${BASE_URL}/checkout/validateOrder`, {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: user ? `Bearer ${user?.accessToken}` : ''
                        }
                    });
    
                    if (!validateResponse.ok) {
                        throw new Error('Payment validation failed');
                    }
    
                    const jsonRes = await validateResponse.json();
    
                    if (jsonRes.message === 'Success') {
                        setCartItems([]);
                    }
    
                    console.log(">>>JSON RES", jsonRes.message);
                },
                prefill: { // We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    name: "customer", // your customer's name
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000" // Provide the customer's phone number for better conversion rates 
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
    
            const rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                console.log('Payment Failed', response.error);
            });
    
            rzp1.open();
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };
    const handleDeleteCartItem = async (id) => {

        try {


            console.log(id);
            const response = await axios.delete(BASE_URL + `/cart/${id}`, {
                headers: {
                    Authorization: user ? `Bearer ${user?.accessToken}` : ''
                }
            })
            const newCartItem = cartItems.filter(item => item._id !== id)

            setCartItems(newCartItem)
            reFetch()

        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        console.log('====================================');
        console.log(userData);
        console.log('====================================');
    }, [])

    return (
        <div className={`cartContent ${showAddressInput ? `blur` : ''}`}>
            {
                showAddressInput && (
                    <div className='addressInputMain' >
                        <AddAddressInput setShowAddressInput={setShowAddressInput} />
                    </div>
                )
            }
            <div className="contentLeft">

                {
                    userData?.details?.address?.length > 0 || userData?.address?.length > 0 ? (
                        <div className="address">
                            <div className="addressDetails">
                                <p className='userDetails'>Deliver to : <span>{userData?.details?.address[0]?.name}, {userData?.details?.address[0]?.pincode}</span></p>
                                <p className="location">{userData?.details?.address[0]?.city} , {userData?.details?.address[0]?.state}</p>
                            </div>
                            <button className="changeAddress" onClick={() => setShowAddressInput(true)}>Change Address</button>
                        </div>
                    ) : (
                        <div className="address">
                            <div className="addressDetails check">
                                check delivery time & services
                            </div>
                            <button className='changeAddress' onClick={() => setShowAddressInput(true)}>Add Address</button>
                        </div>
                    )

                }
                {
                    cartItems?.map((item, i) => (
                        <div className="cartItems1" key={i}>
                            <div className="item1">
                                <CloseRoundedIcon className='icon' onClick={() => handleDeleteCartItem(item._id)} />
                                <img src={item?.product?.images[1]} alt="" />

                                <div className="details">
                                    <div className="top">
                                        <h3>{item?.product?.brandName}</h3>
                                        <p className='productName'>{item?.product?.name}</p>
                                        <p className='soldBy'>Sold by: {item?.product?.brandName} Store</p>
                                    </div>
                                    <div className="middle">
                                        <div className="size">
                                            <p>Size:</p>
                                            <select name="size" id="">
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                            </select>
                                        </div>
                                        <div className="qty">
                                            <p>Qty:</p>
                                            <select name="qty" id="">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    {
                                        item?.product?.offerPrice ?
                                            <div className="bottom">
                                                <p>₹{item?.product?.offerPrice}</p><strike>{item?.product?.price}</strike>
                                                <p className="off">{((item?.product?.price - item.product?.offerPrice) / item?.product?.price * 100).toFixed(0)}% OFF</p>
                                            </div>
                                            :
                                            <div className="bottom">
                                                <p>₹{item?.product?.price}</p>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="contentRight">
                <div className="priceDetails">
                    <p className="heading">PRICE DETAILS </p>
                    <div className="billInput">
                        <p className="field">Total MRP</p>
                        <p className="price">₹{totalMRP}</p>
                    </div>
                    <div className="billInput">
                        <p className="field ">Discount on MRP</p>
                        <p className="price discount">-{totalMRP - discountedMRP}</p>
                    </div>
                    <div className="billInput">
                        <p className="field ">Platform Fee</p>
                        <p className="price ">₹20</p>
                    </div>
                    <div className="billInput">
                        <p className="field ">Shipping Fee</p>
                        <p className="price discount">FREE</p>
                    </div>

                </div>
                <div className="billAmount">
                    <p >Total Amount</p>
                    <p>₹{discountedMRP + 20}</p>
                </div>
                <button className='placeOrder' onClick={(e) => handleCheckout(e)}>PLACE ORDER</button>
            </div>
        </div>
    );
}

export default CartContent;