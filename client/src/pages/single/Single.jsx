import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Crumps from '../../components/Crumps/Crumps';
import ItemImage from '../../components/ItemImages/ItemImage';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import './single.css';

function Single(props) {

    const location = useLocation()

    useEffect(()=>{
        console.log('collection ',location.state);
    })
    const category = location.state.catogory.toUpperCase()
    return (
        <div>
            <div className="single">
                <div className="crumbs">
                <Crumps category={category} data={location.state.data} subData={location.state.subData} id={location.state.id}/>
                </div>
                <div className="itemDetails">
                    <section className="itemImages">
                        <ItemImage/>
                    </section>
                    <section className="itemDesc">
                        <ProductDetails/>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Single;