import { useNavigate } from 'react-router-dom';
import './pleaselog.css';

function WishListEmpty(props) {
    const navigate = useNavigate()
    return (
        <div className='emtyWL'>
            <div className="emtyWL_Content">
                <h3>YOUR WISHLIST IS EMPTY</h3>
                <p>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.
                </p>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                    <g>
                        <rect x="1" y="21" fill="none" stroke="#333" strokeWidth="2" strokeMiterlimit="10" width="58" height="24"></rect>
                        <polyline fill="none" stroke="#333" strokeWidth="2" strokeMiterlimit="10" points="59,27 63,27 63,39 59,39 	"></polyline>
                        <polygon fill="none" stroke="#DC2516" strokeWidth="2" strokeMiterlimit="10" points="18,41 5,41 5,25 14,25 	"></polygon>
                    </g>
                </svg>
                <button onClick={()=> navigate('/')}>CONTINUE SHOPPING</button>
            </div>
        </div>
    );
}

export default WishListEmpty;
