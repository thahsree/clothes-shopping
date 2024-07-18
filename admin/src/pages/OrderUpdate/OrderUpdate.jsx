import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import useFetch from '../../hooks/useFetch';
import './orderupdate.css';

function OrderUpdate({id , setShowOptions , setFetch}) {


    const navigate = useNavigate()
    const BASE_URL = import.meta.env.VITE_BASE_URL

    const url = `${BASE_URL}/orders/${id}`
    const { data, loading, error, reFetch } = useFetch(url)

    const [deliveryStatus , setDeliveryStatus] = useState(data[0]?.deliveryStatus || '')
    
    useEffect(() => {
        if (data && data.length > 0) {
            setDeliveryStatus(data[0].deliveryStatus || '');
        }
        console.log(data);
    }, [data]);

    const handleClose = ()=>{
        setShowOptions(false)
    }

    const handleUpdate = async()=>{

        try{

            const cookies = new Cookies()
            const user = cookies.get('accessToken') 
            const response = await axios.put(`${BASE_URL}/orders/${id}`,{
                deliveryStatus
            },{
                    headers: {
                        Authorization: user?`Bearer ${user}` : ''
                    }
            })

            setShowOptions(false)
            navigate('/orders')
        }catch(error){
            console.log(error)
        }
    }

    const customerID = data && data.length > 0 ? data[0].customerID : '';
    const customerName = data && data.length > 0 ? data[0].address?.name:''
    const customerNumber = data && data.length > 0 ? data[0].address?.contactNumber:''
    const customerCity = data && data.length > 0 ? data[0].address?.city:''
    const customerPincode = data && data.length > 0 ? data[0].address?.pincode:''
    const payment =  data && data.length > 0 ? data[0].paymentStatus:'' 
    const handleChangeDeliveryStatus = (e)=>{

        setDeliveryStatus(e.target.value)
    }
    
    return (
        <div className="updateOrderMain" >
            <div className="updateOrderTop">
                <h1>Update Order</h1>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">Customer ID</p>
                <input type="text" value={customerID } readOnly/>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">Name</p>
                <input type="text" value={customerName } readOnly/>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">Contact Number</p>
                <input type="text" value={customerNumber } readOnly/>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">City</p>
                <input type="text" value={customerCity } readOnly/>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">Pincode</p>
                <input type="text" value={customerPincode } readOnly/>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">Payment</p>
                <input type="text" value={payment } readOnly/>
            </div>
            <div className="updateOrderContent">
                <p className="fieldName">Delivery Status</p>
                <select value={deliveryStatus} onChange={(e)=> handleChangeDeliveryStatus(e)}>
                    <option value={deliveryStatus}>{deliveryStatus}</option>
                    <option value='out for delivery'>out for delivery</option>
                    <option value='order packed'>order packed</option>
                    <option value='order shipped'>order shipped</option>
                    <option value='order cancelled'>order cancelled</option>
                    <option value='waiting for seller confirmation'>waiting for seller confirmation</option>
                </select>
            </div>
            <div className="updateOrderContent">
                <button className='close' onClick={handleClose}>Close</button>
                <button className='update' onClick={handleUpdate}>update</button>
            </div>
        </div>
    );
}


export default OrderUpdate;

