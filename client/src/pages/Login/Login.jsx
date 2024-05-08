import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { authContext } from '../../context/AuthContext';
import './login.css';

function Login(props) {

    const [username, setUserName] = useState("")
    const [password, setPass] = useState("")

    const { user, loading, error, dispatch} = useContext(authContext)


    useEffect(()=>{
        console.log(user);
    })


    const navigate = useNavigate()

    const cookies = new Cookies()

    const submitForm = async (e) => {

        dispatch({ type: 'LOGIN_START' })
        e.preventDefault()


        const LoginData = {
            username,
            password
        }

        try {

            const response = await axios.post('https://clothes-shopping-1.onrender.com/auth/login', LoginData)

            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.details });
           

            cookies.set('accessToken', response.data.accessToken);

            const oldLocation = localStorage.getItem('oldLocation')
            const locationState = JSON.parse(localStorage.getItem('locationState'))

            if (oldLocation) {

                localStorage.removeItem('oldLocation')
                localStorage.removeItem('locationState')
                navigate(oldLocation, { state: locationState })
            } else {
                navigate('/')
            }


        } catch (error) {
            dispatch({ type: "LOGIN_Failed", payload: error.response });
            console.log(error.response.status);
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