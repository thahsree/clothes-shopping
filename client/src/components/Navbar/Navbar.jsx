import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { beautyOptions, kidsOptions, menOptions, womenOptions } from '../../Data/options';
import { PORT } from '../../connections/PORT';
import { authContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import NavOptions from '../NavOptions/NavOptions';
import './navbar.css';
function Navbar(props) {


    const [cartValue, setCartValue] = useState(null);
    const [wishlistValue, setWishlistValue] = useState(null);


    const { user, dispatch } = useContext(authContext)
    const navigate = useNavigate()

    const userID = user?._id

    const url = user ? `${PORT}/users/${userID}` : undefined
    const { data, err, loading, reFetch } = useFetch(url)



    useEffect(() => {
        reFetch()
        setCartValue(data[0]?.cart?.length)
        setWishlistValue(data[0]?.wishList?.length)

    }, [data])


    const [activeItem, setActiveItem] = useState('')

    const handleActive = (itemName) => {
        setActiveItem(itemName)
    }

    const handleLogout = () => {
        localStorage.removeItem('AccessToken');
        dispatch({ type: 'LOGOUT' });
        navigate('/login')

    }

    const handleLogin = () => {
        navigate('/login')
        console.log(user);
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <h1>Fashion Galleria</h1>
            </div>
            <div className="navs">
                <ul>
                    <li className={activeItem === 'men' ? 'men' : ''} onMouseEnter={() => handleActive('men')} onMouseLeave={() => handleActive('')}>Men</li>
                    <li className={activeItem === 'women' ? 'women' : ''} onMouseEnter={() => handleActive('women')} onMouseLeave={() => handleActive('')}>Women</li>
                    <li className={activeItem === 'kids' ? 'kids' : ''} onMouseEnter={() => handleActive('kids')} onMouseLeave={() => handleActive('')}>Kids</li>
                    <li className={activeItem === 'beauty' ? 'beauty' : ''} onMouseEnter={() => handleActive('beauty')} onMouseLeave={() => handleActive('')}>Beauty</li>
                </ul>
            </div>
            {
                activeItem === "men" ?
                    <NavOptions options={menOptions} handleActive={handleActive} catogory="men" />
                    :
                    activeItem === "women" ?
                        <NavOptions options={womenOptions} handleActive={handleActive} catogory="women" />
                        :
                        activeItem === "kids" ?
                            <NavOptions options={kidsOptions} handleActive={handleActive} catogory="kids" />
                            :
                            activeItem === "beauty" ?
                                <NavOptions options={beautyOptions} handleActive={handleActive} catogory="beauty" /> :
                                ""

            }


            <div className="search">
                <SearchOutlinedIcon className='icon' />
                <input type="text" placeholder='search' />
            </div>
            <div className="profile">
                <div className='lists' >
                    <div className='listItems' onMouseEnter={()=> handleActive('options')} onMouseLeave={()=> handleActive("")}>
                        <PersonOutlineIcon className='icon' />
                        {
                            activeItem==="options"&& user &&
                                (
                                    <div className="logout" onClick={handleLogout}>
                                        <p>LOGOUT</p>
                                        < LogoutIcon className='icon' />
                                    </div>
                                ) }
                        {       activeItem==="options"&& !user&&
                                (
                                    <div className="logout" onClick={handleLogin}>
                                        
                                        < LoginIcon className='icon' />
                                        <p>LOGIN</p>
                                    </div>
                                )
                        }

                    </div>
                    <div className='listItems' >
                        <FavoriteBorderIcon className='icon' />
                        {
                            wishlistValue > 0 &&
                            <div className="count">{wishlistValue}</div>
                        }
                    </div>
                    <div className='listItems'>
                        <ShoppingCartOutlinedIcon className='icon' />
                        {
                            cartValue > 0 &&
                            <div className="count">{cartValue}</div>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;