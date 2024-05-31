import { useLocation } from 'react-router-dom';
import Crumps from '../../components/Crumps/Crumps';
import ItemImage from '../../components/ItemImages/ItemImage';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import SkeletonLoading from '../../components/Skeleton/Skeleton';
import useFetch from '../../hooks/useFetch';
import './single.css';

function Single(props) {

    const location = useLocation()

    const id = location?.state?.id


    const {data , loading , error , reFetch } = useFetch(`/items/${id}`)


    const category = location?.state?.catogory?.toUpperCase()
    return (
        <div>
          
            <div className="single">
                <div className="crumbs">
                <Crumps category={category} data={location?.state?.data} subData={location?.state?.subData} id={location?.state?.id}/>
                </div>
                <div className="itemDetails">
                    <section className="itemImages">
                        {
                            data?.images &&
                            <ItemImage images = {data?.images}/> || Array(4).fill().map((_, index) => (
                                <SkeletonLoading key={index} type='singlePageImage'/>
                            ))
                        }
                    </section>
                    <section className="itemDesc">
                        {
                            data &&
                            <ProductDetails loading={loading} datas={data}/>
                        }
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Single;