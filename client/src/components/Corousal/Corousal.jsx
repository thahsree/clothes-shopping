import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './corousal.css';
function Corousal({ lists }) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4

    }

    return (
        <>
            <Slider {...settings}>
                {
                    lists.map((list) => (
                        <div className='Corousel' key={list.title}>
                            <div className="top">
                                <img src={list.img} alt="" />

                            </div>
                            <div className="bottom">
                                <p className="type">{list.title}</p>
                                {
                                    list.desc&&
                                    <p className='desc'>{list.desc}</p>
                                }
                                <p className="offer">{list.offer}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>



    );
}

export default Corousal;

