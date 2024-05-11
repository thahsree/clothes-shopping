import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const addLoginData = (e) => {
        setSignUpData({
            ...signupData,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = async () => {

        if (signupData.password !== signupData.confirmPassword) {
            alert('password missmatch');
            return;
        }

        try {

            const response = await axios.post('http://localhost:4000/auth/register', {
                username: signupData.username,
                phone: Number(signupData.phone),
                email: signupData.email,
                password: signupData.password
            })

            navigate('/login')

        } catch (error) {
            console.log(error);
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