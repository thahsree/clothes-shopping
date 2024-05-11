import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { beautyOptions, kidsOptions, menOptions, womenOptions } from '../../Data/options';
import { authContext } from '../../context/AuthContext';
import { dataContext } from '../../context/DataContext';
import NavOptions from '../NavOptions/NavOptions';
import ToLogin from '../toLogin/ToLogin';
import ToLogout from '../toLogout/ToLogout';
import './navbar.css';
function Navbar(props) {


    const { user, dispatch } = useContext(authContext)
    const navigate = useNavigate()

    const userID = user?.details._id

    // http://localhost:4000/users/${userID}

    
    
    const {userData , dispatch : dataDispatch} = useContext(dataContext)


    const [cartValue, setCartValue] = useState(0);
    const [wishlistValue, setWishlistValue] = useState(0);

    const location = useLocation()

    const isLoginPage = location.pathname === '/login' || location.pathname === '/signup' 


    

    useEffect(()=>{
        setCartValue(userData?.details?.cart?.length)
        setWishlistValue(userData?.details?.wishList?.length)

    },[userData])

    const [activeItem, setActiveItem] = useState('');

    const handleActive = (itemName) => {
        setActiveItem(itemName)
    }

    const handleLogout = () => {

        dataDispatch({type:'CLEAR_DATA'})
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
                    {
                        !isLoginPage &&
                        <div className='listItems' onMouseEnter={() => handleActive('options')} onMouseLeave={() => handleActive("")}>
                            <PersonOutlineIcon className='icon' />
                            {
                                activeItem === "options" && user &&
                                (
                                    <ToLogout handleLogout={handleLogout} />
                                )}
                            {activeItem === "options" && !user &&
                                (
                                    <ToLogin handleLogin={handleLogin} />
                                )
                            }

                        </div>
                    }
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