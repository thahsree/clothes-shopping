import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Crumps from '../../components/Crumps/Crumps';
import ItemImage from '../../components/ItemImages/ItemImage';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import RelatedItems from '../../components/RelatedItems/RelatedItems';
import SkeletonLoading from '../../components/Skeleton/Skeleton';
import { modeContext } from '../../context/DarkMode';
import useFetch from '../../hooks/useFetch';
import './single.css';

function Single() {
    const location = useLocation();
    const id = location?.state?.id;
    const category = location?.state?.catogory?.toUpperCase();

    const { data, loading ,reFetch } = useFetch(`/items/${id}`);

    const {darkMode} = useContext(modeContext)

    useEffect(()=>{

        reFetch()
        window.scrollTo(0, 0)
    },[id])

    return (
        <div className={ darkMode ? 'singlePage dark': 'singlePage'}>
            <div className="crumbs">
                <Crumps 
                    category={category} 
                    data={location?.state?.data} 
                    subData={location?.state?.subData} 
                    id={location?.state?.id} 
                />
            </div>
            <div className="single_itemDetails">
                <div className="single_itemImages">
                    {data?.images ? (
                        <ItemImage images={data.images} />
                    ) : (
                        Array(4).fill().map((_, index) => (
                            <SkeletonLoading key={index} type="singlePageImage" />
                        ))
                    )}
                </div>
                <section className="single_itemDesc">
                    {data && <ProductDetails loading={loading} datas={data} />}
                </section>
            </div>
            <div className="related">
                <h3>SIMILAR PRODUCTS</h3>
                <RelatedItems currentItem={id}/>
            </div>
        </div>
    );
}

export default Single;
