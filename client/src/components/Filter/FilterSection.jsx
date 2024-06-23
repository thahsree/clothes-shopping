import { useContext, useEffect } from 'react';
import { loadingContext } from '../../context/LoadingContext';
import SkeletonLoading from '../Skeleton/Skeleton';
import './filter.css';

function FilterSection(props) {

    const { loading } = useContext(loadingContext)


    useEffect(() => {
        console.log("LOADING", loading);
    }, [])
    return (

        <div className='filter'>
            {
                loading ? <SkeletonLoading type="sideFilter" /> :
                    <>
                        <div className="catogories">
                            <h3>CATEGORIES</h3>
                            <div className="catogories_items">
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>Tshirts <span className="stock">(12115)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>Lounge Shirts <span className="stock">(2215)</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="catogories">
                            <h3>BRAND</h3>
                            <div className="catogories_items">
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>Roadster<span className="stock">(12115)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>Frickster<span className="stock">(2215)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>HRX<span className="stock">(2215)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>WROGN<span className="stock">(2215)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>Tommy Hilfiger<span className="stock">(2215)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>U.S. Polo Assn.<span className="stock">(2215)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>Puma<span className="stock">(2215)</span></label>
                                </div>
                                <span className='more'>+750 more</span>
                            </div>
                        </div>
                        <div className="catogories">
                            <h3>PRICE</h3>
                            <div className="catogories_items">
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>₹150 to ₹3000 <span className="stock">(12115)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>₹3000 to ₹7000 <span className="stock">(12115)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>₹7000 to ₹11000 <span className="stock">(12115)</span></label>
                                </div>
                                <div className="catogories_item">
                                    <input type="checkbox" className='check-box' />
                                    <label>₹11000 to ₹15000 <span className="stock">(12115)</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="catogories">
                            <h3>DISCOUNT RANGE</h3>
                            <div className="catogories_items">
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>10% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>20% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>30% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>40% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>50% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>60% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>70% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>80% and above</label>
                                </div>
                                <div className="catogories_item">
                                    <input type="radio" className='check-box' />
                                    <label>90% and above</label>
                                </div>
                            </div>
                        </div>
                    </>
            }

        </div>
    );
}

export default FilterSection;
