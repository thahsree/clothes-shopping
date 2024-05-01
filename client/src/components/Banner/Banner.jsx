import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './banner.css';
function Banner(props) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }

    return (
        <div className='banner'>
            <div className="bannerItems">
                <div className="salesTimer">
                    <p>Offer Starts in <span className="time">00</span> h : <span className="time">15</span> m : <span className="time">45</span> s</p>
                </div>
                <div className="images">
                    <Slider {...settings}>
                        <div className="image">
                            <img src="https://images.jdmagicbox.com/comp/temp/deals/8d812e98da4039e2260f2d15c0a27ff1-m5xdj.jpg" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://img.paisawapas.com/ovz3vew9pw/2020/01/14152725/nnnnowsale.jpg" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/supper-sale-banner-ad-for-shoes-offre-design-template-263b3813e52a6a6eb85fa45fd49ca3b4_screen.jpg?ts=1625994393" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://the-philosophers-shirt.com/cdn/shop/files/Website_Banner_premium.jpg?v=1708460444" alt="" />
                        </div>
                    </Slider>
                </div>


            </div>
        </div>
    );
}

export default Banner;