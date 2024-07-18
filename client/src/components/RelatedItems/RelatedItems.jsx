import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import './related.css';

function RelatedItems({currentItem}) {

    const [data, setData] = useState([]);

    const navigate = useNavigate()
    const location = useLocation()

    const fetchDatas = async () => {

        try {
            const response = await axios.get('/items')   // currently adding /items due to lack of products, we can add query for based on item
            if (response) {
                setData(response.data)
            }
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }
    
    const filteredData = data?.filter((item)=> item._id !== currentItem)

    const handleViewItem = (id)=>{

        navigate(`/products/${id}` ,{ state: { ...location.state, id } } )
    }

    useEffect(() => {

        fetchDatas();

    }, [])

    return (
        <div className='related_main'>
            {
                filteredData?.map((item, i) => (
                    <div className="relatedContentCard" key={i} onClick={()=> handleViewItem(item._id)}> 
                        <div className="relatedimg">
                            <img src={item.images[0]} width={209} height={250} alt="product image" />
                        </div>
                        <div className="relatedcontent">
                            <h1>{item.brandName}</h1>

                            <p>{item.name}</p>
                            {
                                item.offerPrice ?
                                    <div className="relatedPrice">
                                        <p>₹{item.offerPrice}</p> <strike>{item.price}</strike>
                                        <p className="offer">{((item.price - item.offerPrice) / item.price * 100).toFixed(0)}% OFF</p>
                                    </div> :
                                    <div className="relatedPrice">
                                        <p>₹{item.price}</p>
                                    </div>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default RelatedItems;