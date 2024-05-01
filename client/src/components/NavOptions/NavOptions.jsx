import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navoptions.css';
function NavOptions({ options , handleActive, catogory }) {

    const navigate = useNavigate()
    const handleProductListing = (subData,catogory,data) => {
        navigate('/products', { state: { subData,catogory,data } });
    };
    
    return (
        <div className='navOptions' onMouseEnter={()=> handleActive(catogory)} onMouseLeave={()=> handleActive('')}>
            {options.map((data, index) => (
                <div className='option' key={index}>
                    <div className="top">
                        <p className='itemList'>{data.heading}</p>
                    </div>
                    <div className="bottom">
                        {data.datas.map((subData,subIndex)=>(
                            <p onClick={()=> handleProductListing(subData,catogory,data.heading)} className="lists" key={subIndex}>{subData}</p>
                        ))}
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NavOptions;
