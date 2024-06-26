import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import deleteImage from '../../assets/images/delete.png';
import { modeContext } from '../../context/DarkMode';
import './emptyCart.css';
function EmptyCart(props) {

    const navigate = useNavigate()
    const handleNavigate = () => {

        navigate('/')
    }

    const toWishList = ()=>{

        navigate('/wishlist')
    }

    const {darkMode} = useContext(modeContext)

    return (
        <div className={darkMode ? 'emptyCart dark' :'emptyCart'}>
            <div className="top">
                <img src={deleteImage} alt="empty cart image" />

            </div>
            <div className="middle">
                <h3>Oops! Your cart is EMPTY</h3>
                <h5>Looks like you havn't added anything to your cart</h5>
                <div className="buttons">
                    <button onClick={handleNavigate}>Shop Now</button>
                    <button onClick={toWishList}>Go to WISHLIST</button>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;