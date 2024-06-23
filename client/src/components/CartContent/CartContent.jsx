import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../context/DataContext';
import AddAddressInput from '../AddAddressInput/AddAddressInput';
import './cartContent.css';


function CartContent({ cartItems }) {


    const { userData } = useContext(dataContext)
    const totalMRP = cartItems.reduce((total, item) => total + item?.product?.price, 0);
    const discountedMRP = cartItems.reduce((total, item) => total + item?.product?.offerPrice, 0);

    const [showAddressInput, setShowAddressInput] = useState(false);


    useEffect(() => {
        console.log('====================================');
        console.log(userData);
        console.log('====================================');
    }, [])

    return (
        <div className={`cartContent ${showAddressInput ? `blur`: ''}`}>
            {
                showAddressInput && (
                    <div className='addressInputMain' >
                        <AddAddressInput setShowAddressInput={setShowAddressInput}/>
                    </div>
                )
            }
            <div className="contentLeft">

                {
                    userData?.details?.address?.length > 0  || userData?.address?.length>0 ? (
                        <div className="address">
                            <div className="addressDetails">
                                <p className='userDetails'>Deliver to : <span>{userData?.details?.address[0]?.name}, {userData?.details?.address[0]?.pincode  }</span></p>
                                <p className="location">{userData?.details?.address[0]?.city } , {userData?.details?.address[0]?.state }</p>
                            </div>
                            <button className="changeAddress">Change Address</button>
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
                                <CloseRoundedIcon className='icon' />
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
                <button className='placeOrder'>PLACE ORDER</button>
            </div>
        </div>
    );
}

export default CartContent;