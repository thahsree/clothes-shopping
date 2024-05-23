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
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1082,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // }
        ]

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

