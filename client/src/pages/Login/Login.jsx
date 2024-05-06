import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { authContext } from '../../context/AuthContext';
import './login.css';

function Login(props) {

    const [username, setUserName] = useState("")
    const [password, setPass] = useState("")

    const {user,loading,error,dispatch} = useContext(authContext)



    const cookies = new Cookies()
    const navigate = useNavigate()


    const submitForm = async (e) => {

        dispatch({type:'LOGIN_START'})
        e.preventDefault()

       
        const LoginData = {
            username,
            password
        }

        try {

            const response = await axios.post('http://localhost:4000/auth/login', LoginData)
            console.log(response.data);
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.details});
            cookies.set('accessToken', response.data.accessToken);
            navigate('/')
            
        } catch (error) {
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