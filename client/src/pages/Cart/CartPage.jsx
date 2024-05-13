import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CartNav from '../../components/CartNav/CartNav';
import './CartPage.css';

function CartPage(props) {
    return (
        <div className='cart'>
            <CartNav />

            <div className="cartContent">
                <div className="contentLeft">
                    <div className="address">
                        <div className="addressDetails">
                            <p className='userDetails'>Deliver to : <span>Thashreef, 670561</span></p>
                            <p className="location">Kannur , Pappinissery</p>

                        </div>
                        <button className="changeAddress">Change Address</button>
                    </div>
                    <div className="cartItems">
                        <div className="item">
                            <CloseRoundedIcon className='icon'/>
                            <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1918-02-M8208.jpg?v=1685454418" alt="" />

                            <div className="details">
                                <div className="top">
                                    <h3>SNITCH</h3>
                                    <p className='productName'>LEON WHITE EMBROIDERY SHIRT</p>
                                    <p className='soldBy'>Sold by: Snitch Store</p>
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
                                <div className="bottom">
                                    <p>₹899</p><strike>1999</strike>
                                    <p className="off">62% off</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cartItems">
                        <div className="item">
                            <CloseRoundedIcon className='icon'/>
                            <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1918-02-M8208.jpg?v=1685454418" alt="" />

                            <div className="details">
                                <div className="top">
                                    <h3>SNITCH</h3>
                                    <p className='productName'>LEON WHITE EMBROIDERY SHIRT</p>
                                    <p className='soldBy'>Sold by: Snitch Store</p>
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
                                <div className="bottom">
                                    <p>₹899</p><strike>1999</strike>
                                    <p className="off">62% off</p>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className="cartItems">
                        <div className="item">
                            <CloseRoundedIcon className='icon'/>
                            <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1918-02-M8208.jpg?v=1685454418" alt="" />

                            <div className="details">
                                <div className="top">
                                    <h3>SNITCH</h3>
                                    <p className='productName'>LEON WHITE EMBROIDERY SHIRT</p>
                                    <p className='soldBy'>Sold by: Snitch Store</p>
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
                                <div className="bottom">
                                    <p>₹899</p><strike>1999</strike>
                                    <p className="off">62% off</p>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className="cartItems">
                        <div className="item">
                            <CloseRoundedIcon className='icon'/>
                            <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1918-02-M8208.jpg?v=1685454418" alt="" />

                            <div className="details">
                                <div className="top">
                                    <h3>SNITCH</h3>
                                    <p className='productName'>LEON WHITE EMBROIDERY SHIRT</p>
                                    <p className='soldBy'>Sold by: Snitch Store</p>
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
                                <div className="bottom">
                                    <p>₹899</p><strike>1999</strike>
                                    <p className="off">62% off</p>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className="cartItems">
                        <div className="item">
                            <CloseRoundedIcon className='icon'/>
                            <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1918-02-M8208.jpg?v=1685454418" alt="" />

                            <div className="details">
                                <div className="top">
                                    <h3>SNITCH</h3>
                                    <p className='productName'>LEON WHITE EMBROIDERY SHIRT</p>
                                    <p className='soldBy'>Sold by: Snitch Store</p>
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
                                <div className="bottom">
                                    <p>₹899</p><strike>1999</strike>
                                    <p className="off">62% off</p>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                    
                </div>
                <div className="contentRight">
                    <div className="priceDetails">
                        <p className="heading">PRICE DETAILS <span className="count">(1 Item)</span></p>
                        <div className="billInput">
                            <p className="field">Total MRP</p>
                            <p className="price">₹1999</p>
                        </div>
                        <div className="billInput">
                            <p className="field ">Discount on MRP</p>
                            <p className="price discount">-₹1100</p>
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
                        <p>₹919</p>
                    </div>
                    <button className='placeOrder'>PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;