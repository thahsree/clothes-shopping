import axios from 'axios';
<<<<<<< HEAD
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
=======
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { PORT } from '../../connections/PORT';
>>>>>>> d87c2ef816c6448d5afd55f84fe7126873b947b1
import { authContext } from '../../context/AuthContext';
import './login.css';

function Login(props) {

    const [username, setUserName] = useState("")
    const [password, setPass] = useState("")

    const { user, loading, error, dispatch } = useContext(authContext)

    



    const navigate = useNavigate()

    const submitForm = async (e) => {

        dispatch({ type: 'LOGIN_START' })
        e.preventDefault()


        const loginData = {
            username,
            password
        }

        try {
            const response = await axios.post('http://localhost:4000/auth/login', loginData);
            console.log('Login response:', response.data);

<<<<<<< HEAD
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
=======
            const response = await axios.post(`${PORT}/auth/login`, LoginData)
>>>>>>> d87c2ef816c6448d5afd55f84fe7126873b947b1

            

            const oldLocation = localStorage.getItem('oldLocation');
            const locationState = JSON.parse(localStorage.getItem('locationState'));

            if (oldLocation) {
                localStorage.removeItem('oldLocation');
                localStorage.removeItem('locationState');
                navigate(oldLocation, { state: locationState });
            } else {
                navigate('/');
            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAILED", payload: error.response || error.message });
            console.error('Login error:', error);
        }

    }


    return (
        <div className='loginMain'>
            <h3>L O G I N</h3>
            <div className="inputBox">
                <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPass(e.target.value)} />
                <button onClick={(e) => submitForm(e)}>submit</button>
                <Link to='/signup' style={{ textDecoration: 'none' }}>
                    <p>create an account</p>
                </Link>
            </div>

           
        </div>
    );
}

export default Login;