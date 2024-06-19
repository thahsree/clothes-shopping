import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './signup.css';

function SignUp(props) {

    const [signupData, setSignUpData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''

    })

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate()

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const addLoginData = (e) => {
        setSignUpData({
            ...signupData,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = async () => {

        if (signupData.password !== signupData.confirmPassword) {
            enqueueSnackbar("PASSWORD MISSMATCH", { variant: 'warning' })

            setTimeout(() => {
                closeSnackbar()
            }, [1500])
            return;
        }

        try {

            const response = await axios.post(BASE_URL+'/auth/register', {
                username: signupData.username,
                phone: Number(signupData.phone),
                email: signupData.email,
                confirmPassword: signupData.confirmPassword,
                password:signupData.password,
                isAdmin:true
            })

            enqueueSnackbar("ADMIN ACCOUNT CREATED SUCCESSFULLY", { variant: 'success' })

            setTimeout(() => {
                closeSnackbar()
            }, [1500])

            navigate('/login')

        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: 'error' })
            setTimeout(() => {
                closeSnackbar()
            }, [1000])
        }
    };

    useEffect(()=>{
        console.log('====================================');
        console.log(signupData);
        console.log('====================================');
    },[signupData])
    return (
        <>
            <NavBar />

            <div className='loginMain'>
                <h3>S I G N U P </h3>
                <div className="inputBox">
                    <input type="text" id='username' placeholder='username' onChange={(e) => addLoginData(e)} />
                    <input type="email" id='email' placeholder='email' onChange={(e) => addLoginData(e)} />

                    <input type="text" id='phone' placeholder='phone' onChange={(e) => addLoginData(e)} />
                    <input type="password" id='password' placeholder='password' onChange={(e) => addLoginData(e)} />
                    <input type="password" id='confirmPassword' placeholder='confirm-password' onChange={(e) => addLoginData(e)} />
                    <button onClick={(e) => submitForm(e)}>submit</button>

                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <p>go to login-page</p>
                    </Link>
                </div>


            </div>
        </>
    );
}

export default SignUp;