import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useState } from 'react';
import { beautyOptions, kidsOptions, menOptions, womenOptions } from '../../Data/options';
import NavOptions from '../NavOptions/NavOptions';
import './navbar.css';
function Navbar(props) {


    const [activeItem, setActiveItem] = useState('')

    const handleActive = (itemName) => {
        setActiveItem(itemName)
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
                <div className='lists'>
                    <div className='listItems'>
                        <PersonOutlineIcon className='icon'/>
                    </div>
                    <div className='listItems'>
                        <FavoriteBorderIcon className='icon'/>
                        <div className="count">8</div>
                    </div>
                    <div className='listItems'>
                        <ShoppingCartOutlinedIcon className='icon'/>
                        <div className="count">8</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;