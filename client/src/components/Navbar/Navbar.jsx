import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Drawer from '@mui/material/Drawer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { beautyOptions, kidsOptions, menOptions, womenOptions } from '../../Data/options';
import { authContext } from '../../context/AuthContexts';
import { modeContext } from '../../context/DarkMode';
import { dataContext } from '../../context/DataContext';
import NavOptions from '../NavOptions/NavOptions';
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav';
import ToLogin from '../toLogin/ToLogin';
import ToLogout from '../toLogout/ToLogout';
import './navbar.css';
function Navbar(props) {


    const { user, dispatch } = useContext(authContext)
    const navigate = useNavigate()

    const { userData, dispatch: dataDispatch } = useContext(dataContext)

    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const [cartValue, setCartValue] = useState(0);
    const [wishlistValue, setWishlistValue] = useState(0);

    const cartvalueToDisplay = cartValue

    const location = useLocation()

    const isLoginPage = location.pathname === '/login' || location.pathname === '/signup'

    const {dispatch : darkModeDispatch ,darkMode } = useContext(modeContext)

    const handleDarkMode = ()=>{

        try {
            darkModeDispatch({type:'TOGGLE'})

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        setCartValue(userData?.details?.cart?.length)
        setWishlistValue(userData?.details?.wishList?.length)

    }, [userData])

    const [activeItem, setActiveItem] = useState('');

    const handleActive = (itemName) => {
        setActiveItem(itemName)
    }

    const handleLogout = () => {

        dataDispatch({ type: 'CLEAR_DATA' })
        dispatch({ type: 'LOGOUT' });
        navigate('/login')

    }

    const handleLogin = () => {
        navigate('/login')
    }

   
    {darkMode ? 'dark home' : 'home'}

    return (
        <div className= {darkMode ? 'dark navbar' : 'navbar'}>
            <div className="LOGO-Section">
                <div className="ham">
                    <MenuIcon className='resicon' onClick={toggleDrawer(true)} />
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <ResponsiveNav setOpen={setOpen} />
                    </Drawer>
                </div>
                <Link className="logo" to='/'>
                    <h1>Fashion Galleria</h1>
                </Link>
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
                    <div className="listItems">
                        <DarkModeOutlinedIcon onClick={handleDarkMode}/>
                    </div>
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

                    <Link className='listItems' to='/wishlist' style={{
                        textDecoration: 'none',
                        color: "#000"
                    }}>
                        <FavoriteBorderIcon className='icon' />
                        {
                            wishlistValue > 0 &&
                            <div className="count">{wishlistValue}</div>
                        }
                    </Link>
                    <Link className='listItems' to='/cart' style={{
                        textDecoration: 'none',
                        color: "#000"
                    }}>
                        <ShoppingCartOutlinedIcon className='icon' />
                        {
                            cartvalueToDisplay > 0 &&
                            <div className="count">{cartvalueToDisplay}</div>
                        }

                    </Link>

                </div>
            </div>

        </div>
    );
}

export default Navbar;