import axios from 'axios';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthContexts';
import './Order.css';
function Orders(props) {

    const BASE_URL = import.meta.env.VITE_BASE_URL
    const { user } = useContext(authContext)

    const [data, setData] = useState();
    const navigate = useNavigate()

    const fetchOrders = async () => {


        try {

            const response = await axios.get(BASE_URL + '/orders/userOrders', {
                headers: {
                    Authorization: user ? `Bearer ${user.accessToken}` : ''
                }
            })

            const modifiedData = response.data.map(item => {
                const newDate = moment(item.order.createdAt);
                const day = newDate.date();
                const year = newDate.year();
                const month = newDate.format('MMMM');

                const addedDate = newDate.add(23, 'days').toISOString();
                const newAddedDate = moment(addedDate);
                const addedDay = newAddedDate.date();
                const addedMonth = newAddedDate.format('MMMM')

                return {
                    ...item,
                    createdAtDay: day,
                    createdAtYear: year,
                    addedMonth: addedMonth,
                    createdAtMonth: month,
                    addedDay
                };
            });
            setData(modifiedData);
            console.log('==============DATA======================');
            console.log(modifiedData);
            console.log('====================================');

        } catch (error) {
            console.log(error);
        }
    }

    const handleViewItem = (id) => {


        navigate(`/products/${id}`, { state: { ...location.state, id } });
    }

    const handleCancelOrder = async (orderID, itemID) => {

        const BASE_URL = import.meta.env.VITE_BASE_URL
        try {

            const userConfirmed = window.confirm("Are you sure you want to cancel this order?");

            if (!userConfirmed) {
                return
            }

            console.log('Access Token', user?.accessToken);

            const response = await axios.post(`${BASE_URL}/orders/cancelorder/${orderID}/${itemID}`, null, {
                headers: {
                    Authorization: user ? `Bearer ${user.accessToken}` : ''
                }
            })

            fetchOrders();

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        fetchOrders()
    }, [])
    return (
        <div className="orders-main">
            <div className="orders-Head">
                <h4>YOUR ORDERS ({data?.length})</h4>
            </div>
            {
                data ? (
                    data.map((item, i) => (
                        item.product ? (
                            <div className={item?.order?.deliveryStatus === 'order cancelled' ? 'order-box failed' : 'order-box success'} key={i}>
                                <div className="order-box-top">
                                    <div className="order-box-top-details">
                                        <div className="placed">
                                            <p className='head-order'>Order Placed</p>
                                            <p className='input-order'>{item?.createdAtMonth} {item?.createdAtDay}</p>
                                        </div>
                                        {
                                            item.product[0]?.offerPrice ?
                                                <div className="total">
                                                    <p className='head-order'>Amount</p>
                                                    <p className='input-order'>₹{item?.product[0]?.offerPrice}</p>
                                                </div> : (
                                                    <div className="total">
                                                        <p className='head-order'>Amount</p>
                                                        <p className='input-order'>₹{item?.product[0]?.price}</p>
                                                    </div>
                                                )
                                        }
                                        <div className="shipTo">
                                            <p className='head-order'>Ship To </p>
                                            <p className='input-order'>{item?.order?.address?.city}</p>
                                        </div>
                                    </div>
                                    <div className="orderID">
                                        <p className='input-order'>{item?.order?.orderID}</p>
                                        <div className="orderID-options">
                                            <p>View Order Details</p>
                                            <p>Download Invoice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-box-middle">
                                    <div className="deliveryStatus">
                                        <p>{item?.order?.deliveryStatus}</p>
                                    </div>
                                    <div className="order-item">
                                        <div className="order-item-image">
                                            <img src={item?.product[0]?.images[0]} width='100px' heigth='100px' alt="" />
                                        </div>
                                        <div className="order-item-desc">
                                            <div className="order-item-desc-details">
                                                <p className='order-desc-head'>{item.product[0]?.name}</p>
                                                <p className='order-desc-brand'>{item.product[0]?.brand}</p>
                                                <p className='order-desc-return'>Return or Replace : Eligible through {item.addedMonth} {item.addedDay}</p>
                                            </div>
                                            <div className="order-item-options">
                                                <button onClick={() => handleViewItem(item.product[0]._id)}>View Your Item</button>
                                                <button>Track Package</button>
                                                {
                                                    item?.order?.deliveryStatus !== 'order cancelled' &&
                                                    <button onClick={() => handleCancelOrder(item?.order?.orderID, item?.product[0]?._id)}>Cancel Order</button>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="order-box" key={i}>
                                <p>item not found</p>
                            </div>
                        )

                    ))
                ) : (
                    ''
                )
            }
        </div>
    );
}

export default Orders;