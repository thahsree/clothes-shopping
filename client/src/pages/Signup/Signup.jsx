import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import './signup.css';

function Signup(props) {


    const [signupData, setSignUpData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''

    })

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

            setTimeout(()=>{
                closeSnackbar()
            },[1500])
            return;
        }

        try {

            const response = await axios.post('/auth/register', {
                username: signupData.username,
                phone: Number(signupData.phone),
                email: signupData.email,
                password: signupData.password
            })

            enqueueSnackbar("USER CREATED SUCCESSFULLY", { variant: 'success' })

            setTimeout(()=>{
                closeSnackbar()
            },[1500])

            navigate('/login')

        } catch (error) {
            const errorMSG = JSON.stringify(error.response.data.message)
            enqueueSnackbar(JSON.parse(errorMSG), { variant: 'error' })
            setTimeout(()=>{
                closeSnackbar()
            },[1000])
        }
    };

    return (
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
    );
}

export default Signup;