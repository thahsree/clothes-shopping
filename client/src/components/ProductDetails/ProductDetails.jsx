import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';
import CheckPincode from '../CheckPincode/CheckPincode';
import './details.css';


function ProductDetails({ data }) {

    const [selectedSize, setSelectedSize] = useState("");
    const [showSizeErr , setShowSizeErr] = useState(false)

    const handleSelectSize = (size) => {

        setSelectedSize(size)
        setShowSizeErr(false)

    }

    const {user , loading , dispatch} = useContext(authContext)

    const handleAddToCart = ()=>{
        
        if(!selectedSize){
            setShowSizeErr(true)
            return
        }
        if(!user){
            console.log('Please Log In First');
        }
    }



    return (
        <>
            <div className="productDetails">
                <h3>{data.brandName}</h3>
                <p>{data.name}</p>
                <div className="rating">
                    <p>3.6</p><StarIcon className='icon' /><span className='rate'> | 745 Ratings</span>
                </div>
            </div>
            <div className="productPricing">
                <div className="price">
                    <div className="priceDetails">
                        {
                            data.offerPrice ?
                                (
                                    <>
                                        <p className='currentPrice'>₹{data.offerPrice}</p>
                                        <p className='actualprice'>MRP <strike>{data.price}</strike></p>
                                        <p className="discount">({((data.price - data.offerPrice) / data.price * 100).toFixed(0)}% OFF)</p>
                                    </>
                                ):(
                                    <p className='currentPrice'>₹{data.price}</p>
                                )
                        }
                    </div>
                    <p className='tax'>inclusive of all taxes</p>
                </div>
                <div className="sizeSelection">
                    <h4>SELECT SIZE</h4>
                    {
                        showSizeErr && <p className="error">please select a size</p>
                    }
                    <div className="sizeChart">
                        <div className={selectedSize === "S" ? "active sizes" : "sizes"} onClick={() => handleSelectSize('S')}>S</div>
                        <div className={selectedSize === "M" ? "active sizes" : "sizes"} onClick={() => handleSelectSize('M')}>M</div>
                        <div className={selectedSize === "L" ? "active sizes" : "sizes"} onClick={() => handleSelectSize('L')}>L</div>
                        <div className={selectedSize === "XL" ? "active sizes" : "sizes"} onClick={() => handleSelectSize('XL')}>XL</div>
                        <div className={selectedSize === "XXL" ? "active sizes" : "sizes"} onClick={() => handleSelectSize('XXL')}>XXL</div>
                    </div>
                </div>
                <div className="addItem">
                    <div className="addToCart" onClick={handleAddToCart}>
                        ADD TO CART <ShoppingCartOutlinedIcon className='icon' />
                    </div>
                    <div className="wishList">
                        WISHLIST <FavoriteBorderIcon className='icon' />
                    </div>
                </div>
            </div>
            <div className="delivery">
                <div className="deliveryHeading">
                    <h3>DELIVERY OPTIONS </h3><LocalShippingOutlinedIcon className='icon' />
                </div>
                <CheckPincode />
            </div>
            <div className="productDesc">
                <div className="about">
                    <div className="aboutHeading">
                        <h3>PRODUCT DETAILS</h3>
                        <NotesIcon />
                    </div>
                    <div className="details">
                        {
                            data.productDetails &&
                            data.productDetails.map((details, i) => (
                                <p key={i}>{details}</p>
                            ))

                        }
                    </div>
                </div>
                <div className="others">
                    <div className="otherHeading">
                        <h3>Size & Fit</h3>
                    </div>
                    <div className="details">
                        {
                            data.sizeAndFit &&
                            data.sizeAndFit.map((details, i) => (
                                <p key={i}>{details}</p>
                            ))

                        }
                    </div>
                </div>
                <div className="others">
                    <div className="otherHeading">
                        <h3>Material & Care</h3>
                    </div>
                    <div className="details">
                        {
                            data.materialAndCare &&

                            data.materialAndCare.map((details, i) => (
                                <p key={i}>{details}</p>
                            ))

                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;