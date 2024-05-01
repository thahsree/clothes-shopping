import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import CheckPincode from '../CheckPincode/CheckPincode';
import './details.css';


function ProductDetails(props) {

    const [selectedSize , setSelectedSize] = useState("");

    const handleSelectSize = (size)=>{
        setSelectedSize(size)
      
    }

    useEffect(() => {
        console.log(selectedSize); // Log the updated value of selectedSize
    }, [selectedSize]); 


    return (
        <>
            <div className="productDetails">
                <h3>BULLMER</h3>
                <p>Project Rock T-Shirt LC Brahma Short Sleeve T-Shirt Green</p>
                <div className="rating">
                    <p>3.6</p><StarIcon className='icon' /><span className='rate'> | 745 Ratings</span>
                </div>
            </div>
            <div className="productPricing">
                <div className="price">
                    <div className="priceDetails">
                        <p className='currentPrice'>₹389</p>
                        <p className='actualprice'>MRP <strike>₹1499</strike></p>
                        <p className="discount">(74% OFF)</p>
                    </div>
                    <p className='tax'>inclusive of all taxes</p>
                </div>
                <div className="sizeSelection">
                    <h4>SELECT SIZE</h4>
                    <div className="sizeChart">
                        <div className={selectedSize === "S"? "active sizes":"sizes"} onClick={()=> handleSelectSize('S')}>S</div>
                        <div className={selectedSize === "M"? "active sizes":"sizes"} onClick={()=> handleSelectSize('M')}>M</div>
                        <div className={selectedSize === "L"? "active sizes":"sizes"} onClick={()=> handleSelectSize('L')}>L</div>
                        <div className={selectedSize === "XL"? "active sizes":"sizes"} onClick={()=> handleSelectSize('XL')}>XL</div>
                        <div className={selectedSize === "XXL"? "active sizes":"sizes"} onClick={()=> handleSelectSize('XXL')}>XXL</div>
                    </div>
                </div>
                <div className="addItem">
                    <div className="addToCart">
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
                        <p>Green Tshirt for men</p>
                        <p>Tribal printed</p>
                        <p>Regular length</p>
                        <p>Round neck</p>
                        <p>Short, regular sleeves</p>
                        <p>Knitted cotton fabric</p>

                    </div>
                </div>
                <div className="others">
                    <div className="otherHeading">
                        <h3>Size & Fit</h3>
                    </div>
                    <div className="details">
                        <p>Oversized</p>
                        <p>The model (height 6') is wearing a size M</p>
                    </div>
                </div>
                <div className="others">
                    <div className="otherHeading">
                        <h3>Material & Care</h3>
                    </div>
                    <div className="details">
                        <p>Cotton</p>
                        <p>Machine Wash</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;