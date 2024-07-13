import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthContexts';
import './toLogout.css';

function ToLogout({handleLogout}) {

        const {user} = useContext(authContext)
    return (
        <div className="toLogout" >
            <div className="Welcome">
                <div className="heading">
                    <h4 >WELCOME</h4>
                    <p >{user.details.username}</p>
                </div>

                <div className="loginAction" onClick={handleLogout}>
                    < LogoutIcon className='icon' />
                    <p>LOGOUT</p>
                </div>
            </div>
            
            <div className="actions">
                <ul>
                    <Link to='/orders' className='li-Orders'>Orders</Link>
                    <li className='li-Orders'>Wishlist</li>
                    <li className='li-Orders'>Gift Cards</li>
                    <li className='li-Orders'>Contact Us</li>
                </ul>
            </div>

        </div>
    );
}

export default ToLogout;