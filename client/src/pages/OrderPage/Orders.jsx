import axios from 'axios';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthContexts';
import './Order.css';
function Orders(props) {

    const BASE_URL = import.meta.env.VITE_BASE_URL
    const { user } = useContext(authContext)

    const [data, setData] = useState();

    const fetchOrders = async () => {


        try {

            const response = await axios.get(BASE_URL + '/orders/userOrders', {
                headers: {
                    Authorization: user ? `Bearer ${user.accessToken}` : ''
                }
            })

            const modifiedData = response.data.map(item => {
                const newDate = moment(item.createdAt);
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
            console.log('====================================');
            console.log(modifiedData);
            console.log('====================================');

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
                            <div className={item?.order?.paymentStatus === 'captured' ? 'order-box success' : 'order-box failed'} key={i}>
                                <div className="order-box-top">
                                    <div className="order-box-top-details">
                                        <div className="placed">
                                            <p className='head-order'>Order Placed</p>
                                            <p className='input-order'>{item?.createdAtMonth} {item?.createdAtDay}</p>
                                        </div>
                                        <div className="total">
                                            <p className='head-order'>Amount</p>
                                            <p className='input-order'>₹{item?.product[0]?.offerPrice}</p>
                                        </div>
                                        <div className="shipTo">
                                            <p className='head-order'>Ship To </p>
                                            <p className='input-order'>{item?.order?.address?.city}</p>
                                        </div>
                                    </div>
                                    <div className="orderID">
                                        <p className='input-order'>{item?.order?.orderID}</p>
                                        <div className="orderID-options">
                                            <p>View Order Details</p>
                                            <p>View Invoice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-box-middle">
                                    <div className="deliveryStatus">
                                        <p>{item?.order?.deliveryStatus === "waiting for payment" ? "Cancelled" : item?.order?.deliveryStatus}</p>
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
                                                <button>View Your Item</button>
                                                <button>Track Package</button>
                                                <button>Cancel Order</button>
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