import deleteImage from '../../assets/images/delete.png';
import './emptyCart.css';
function EmptyCart(props) {
    return (
        <div className='emptyCart'>
            <div className="top">
                <img src={deleteImage} alt="empty cart image" />
               
            </div>
            <div className="middle">
                <h3>Oops! Your cart is EMPTY</h3>
                <h5>Looks like you havn't added anything to your cart</h5>
                <button>Shop Now</button>
            </div>
        </div>
    );
}

export default EmptyCart;