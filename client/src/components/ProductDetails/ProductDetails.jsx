import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PORT } from '../../connections/PORT';
import { authContext } from '../../context/AuthContext';
import { dataContext } from '../../context/DataContext';
import usePrivateFetch from '../../hooks/usePrivateFetch';
import CheckPincode from '../CheckPincode/CheckPincode';
import './details.css';


function ProductDetails({ datas }) {

    const [selectedSize, setSelectedSize] = useState("");
    const [showSizeErr, setShowSizeErr] = useState(false)

    const { user, dispatch } = useContext(authContext)

<<<<<<< HEAD
    const {userData} = useContext(dataContext)
=======
    const userID = user?._id
    
    const {data , err , loading , reFetch } = useFetch(`${PORT}/users/${userID}`)
>>>>>>> d87c2ef816c6448d5afd55f84fe7126873b947b1




    const userID = user?.details?._id

    const {data , reFetch , setData} = usePrivateFetch(`http://localhost:4000/users/${userID}`)
    


    const handleSelectSize = (size) => {

        setSelectedSize(size)
        setShowSizeErr(false)

    }
    
    const navigate = useNavigate()
    const location = useLocation()



    const handleAddToCart = async () => {

        if (!selectedSize) {
            setShowSizeErr(true)
            return
        }
        if (!user) {
            console.log('Please Log In First');

            localStorage.setItem('locationState', JSON.stringify(location.state))
            localStorage.setItem('oldLocation', location.pathname)
            navigate('/login')

            return
        }

       
        try {
            
<<<<<<< HEAD
            const response = await axios.put(`http://localhost:4000/itemorder/addToCart?id=${datas._id}&size=${selectedSize}&count=1`,null, {
                headers: {
                    Authorization: user?`Bearer ${user?.accessToken}` : ''
                }
=======
            const response = await fetch(`${PORT}/itemorder/addToCart?id=${datas._id}&size=${selectedSize}&count=1`, {
                method: 'PUT',
                credentials: 'include' // Include cookies in the request
>>>>>>> d87c2ef816c6448d5afd55f84fe7126873b947b1
            });
    
            
            console.log("added to cart");
            reFetch()
            
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="productDetails">
                <h3>{datas.brandName}</h3>
                <p>{datas.name}</p>
                <div className="rating">
                    <p>3.6</p><StarIcon className='icon' /><span className='rate'> | 745 Ratings</span>
                </div>
            </div>
            <div className="productPricing">
                <div className="price">
                    <div className="priceDetails">
                        {
                            datas.offerPrice ?
                                (
                                    <>
                                        <p className='currentPrice'>₹{datas.offerPrice}</p>
                                        <p className='actualprice'>MRP <strike>{datas.price}</strike></p>
                                        <p className="discount">({((datas.price - datas.offerPrice) / datas.price * 100).toFixed(0)}% OFF)</p>
                                    </>
                                ) : (
                                    <p className='currentPrice'>₹{datas.price}</p>
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
                            datas.productDetails &&
                            datas.productDetails.map((details, i) => (
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
                            datas.sizeAndFit &&
                            datas.sizeAndFit.map((details, i) => (
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
                            datas.materialAndCare &&

                            datas.materialAndCare.map((details, i) => (
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
