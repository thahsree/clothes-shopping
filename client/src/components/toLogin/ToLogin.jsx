import LoginIcon from '@mui/icons-material/Logout';
import './toLogin.css';

function ToLogin({ handleLogin }) {
    return (
        <div className="toLogin" >
            <div className="Welcome">
                <div className="heading">
                    <h4 >WELCOME</h4>
                    <p >To access account and manage orders</p>
                </div>

                <div className="loginAction" onClick={handleLogin}>
                    < LoginIcon className='icon' />
                    <p>LOGIN</p>
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

export default ToLogin;