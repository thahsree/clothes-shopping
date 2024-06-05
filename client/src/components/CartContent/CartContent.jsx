import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './cartContent.css';


function CartContent({cartItems}) {


    const totalMRP = cartItems.reduce((total, item) => total + item?.product?.price, 0);
    const discountedMRP = cartItems.reduce((total, item) => total + item?.product?.offerPrice, 0);
    return (
        <div className="cartContent">
            <div className="contentLeft">
                <div className="address">
                    <div className="addressDetails">
                        <p className='userDetails'>Deliver to : <span>Thashreef, 670561</span></p>
                        <p className="location">Kannur , Pappinissery</p>

                    </div>
                    <button className="changeAddress">Change Address</button>
                </div>
                {
                    cartItems?.map((item, i) => (
                        <div className="cartItems" key={i}>
                            <div className="item">
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
                        <p className="price discount">-{discountedMRP}</p>
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
                    <p>₹{totalMRP - discountedMRP + 20}</p>
                </div>
                <button className='placeOrder'>PLACE ORDER</button>
            </div>
        </div>
    );
}

export default CartContent;