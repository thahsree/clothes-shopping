import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import { Link } from 'react-router-dom';
import './CartNav.css';

function CartNav(props) {
    return (
        <div className='CartNav'>
            <Link className="logo" to='/'>
                <h1>Fashion Galleria</h1>
            </Link>
            <div className="locations">
                <ul>
                    <li className='active'>CART</li>
                    <li>-----------</li>
                    <li>ADDRESS</li>
                    <li>-----------</li>
                    <li>PAYMENT</li>
                </ul>
            </div>
            <div className="other">
                <GppGoodRoundedIcon className='icon'/>
                <h5>100% SECURE</h5>
            </div>
        </div>
    );
}

export default CartNav;