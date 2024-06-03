import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { authContext } from '../../context/AuthContext';
import './login.css';

function Login(props) {

    const [username, setUserName] = useState("")
    const [password, setPass] = useState("")

    const cookies = new Cookies()
    const navigate = useNavigate()
    const { admin, error, loading, dispatch } = useContext(authContext)

    const submitForm = async (e) => {
        e.preventDefault()

        dispatch({ type: "LOGIN_START", payload: true });
        const LoginData = {
            username,
            password
        }

        try {

            const response = await axios.post('http://localhost:4000/auth/login', LoginData)

            const allowedRoles = [5555]  // admin role in backend

            
            let isAdmin = false;
            const userRoles = response?.data?.details?.roles;

            if (userRoles) {
                Object.keys(userRoles).forEach(role => {
                    if (allowedRoles.includes(userRoles[role])) {
                        isAdmin = true;
                    }
                });
            }
            if (isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
                cookies.set('accessToken', response.data.accessToken);
                navigate('/');
            }else{
                alert('PLEASE ENTER ADMIN ADDRESS')
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className='login'>
            <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e) => setPass(e.target.value)} />
            <button onClick={(e) => submitForm(e)}>submit</button>
        </div>
    );
}

export default Login;