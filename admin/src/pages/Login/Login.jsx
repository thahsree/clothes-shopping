import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import NavBar from '../../components/NavBar/NavBar';
import { authContext } from '../../context/AuthContext';
import './login.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ALLOWED_ROLES = [5555]; // admin role in backend

function Login(props) {
    const [username, setUserName] = useState("");
    const [password, setPass] = useState("");
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const cookies = new Cookies();
    const navigate = useNavigate();
    const { dispatch } = useContext(authContext);

    const submitForm = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START", payload: true });

        const loginData = { username, password };

        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, loginData);

            let isAdmin = false;
            const userRoles = response?.data?.details?.roles;

            if (userRoles) {
                isAdmin = Object.values(userRoles).some(role => ALLOWED_ROLES.includes(role));
            }

            if (isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
                cookies.set('accessToken', response.data.accessToken);
                enqueueSnackbar('Logged In' , { variant: 'success' });
                navigate('/');
            } else {
                enqueueSnackbar('PLEASE ENTER VALID ADMIN CERDENTIALS' , { variant: 'info' });
            }
        } catch (error) {
            closeSnackbar();
            enqueueSnackbar(error.response?.data?.message || 'Login failed. Please try again.' , { variant: 'error' });
            dispatch({ type: "LOGIN_FAILURE", payload: error });
        }
    };

    return (
        <>
            <NavBar />
            <div className="loginMain">
                <h3>L O G I N</h3>
                <div className="inputBox">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button onClick={submitForm}>Submit</button>
                    <Link to="/signup" className="link">
                        <p>Create an account</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Login;
