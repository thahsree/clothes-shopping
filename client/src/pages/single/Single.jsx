import { useLocation } from 'react-router-dom';
import Crumps from '../../components/Crumps/Crumps';
import ItemImage from '../../components/ItemImages/ItemImage';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { PORT } from '../../connections/PORT';
import useFetch from '../../hooks/useFetch';
import './single.css';

function Single(props) {

    const location = useLocation()

    const id = location?.state?.id
   

<<<<<<< HEAD
    const {data , loading , error , reFetch } = useFetch(`http://localhost:4000/items/${id}`)
=======
    const {data , loading , error , reFetch } = useFetch(`${PORT}/items/${id}`)
    
>>>>>>> d87c2ef816c6448d5afd55f84fe7126873b947b1


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
                            <ItemImage images = {data?.images}/>
                        }
                    </section>
                    <section className="itemDesc">
                        {
                            data &&
                            <ProductDetails datas={data}/>
                        }
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Single;