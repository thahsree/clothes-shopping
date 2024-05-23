import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { beautyOptions, kidsOptions, menOptions, womenOptions } from '../../Data/options';
import './responsiveNav.css';

function ResponsiveNav({ setOpen }) {

    const [activeItem, setActiveItem] = useState('');
    const navigate = useNavigate()

    const handleProductListing = (catogory,data) => {
        navigate('/products', { state: { catogory,data } });
        setOpen(false)
    };

    return (
        <div className='resNav'>
            <div className="top">
                <div className="null"></div>
                <CloseIcon className='resicon' onClick={() => setOpen(false)} />
            </div>
            <div className="middle">
                <div className='category'>
                    <p className='heading' onClick={()=> setActiveItem('Men')}>MEN</p>
                    <div className="catogorylist">
                        {
                            activeItem==='Men' && menOptions.map((data,i)=>(
                                <p className='item' key={i} onClick={()=> handleProductListing("Men",data.heading)}>{data.heading}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='category'>
                    <p className='heading' onClick={()=> setActiveItem('Women')}>WOMEN</p>
                    <div className="catogorylist">
                        {
                            activeItem==='Women' && womenOptions.map((data,i)=>(
                                <p className='item' key={i} onClick={()=> handleProductListing("Women",data.heading)}>{data.heading}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='category'>
                    <p className='heading' onClick={()=> setActiveItem('Kids')}>KIDS</p>
                    <div className="catogorylist">
                        {
                            activeItem==='Kids' && kidsOptions.map((data,i)=>(
                                <p className='item' key={i} onClick={()=> handleProductListing("Kids",data.heading)}>{data.heading}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='category'>
                    <p className='heading' onClick={()=> setActiveItem('Beauty')}>BEAUTY</p>
                    <div className="catogorylist">
                        {
                            activeItem==='Beauty' && beautyOptions.map((data,i)=>(
                                <p className='item' key={i} onClick={()=> handleProductListing("Beauty",data.heading)}>{data.heading}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveNav;