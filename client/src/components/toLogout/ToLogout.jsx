import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
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
                    <li>Orders</li>
                    <li>Wishlist</li>
                    <li>Gift Cards</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        </div>
    );
}

export default ToLogout;