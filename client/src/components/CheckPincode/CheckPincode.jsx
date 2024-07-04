import { useState } from "react";
import { TbDeviceMobileDollar, TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import './pincode.css';

function CheckPincode(props) {

    const [pinValidate, setPinValidate] = useState(false)
    const [pin, setPin] = useState()

    const pinValidation = () => {
        if (pin.length === 6) {
            setPinValidate(true)
        }
    }

    const expectedDelivery = new Date(Date.now());
    expectedDelivery.setDate(expectedDelivery.getDate() + 10).toString();

    const expectedDateString = expectedDelivery.toString();

    const expectedDay = expectedDateString.split(' ')[0];
    const expectedMonth = expectedDateString.split(' ')[1]
    const expectedDate = expectedDateString.split(' ')[2] 


    const pinReset = () => {
        setPinValidate(false)
        setPin("")
    }


    return (
        <>
            <div className="pincode">
                <input type="text" placeholder='Enter Pincode' value={pin} onChange={(e) => setPin(e.target.value)} disabled={pinValidate} />
                {
                    !pinValidate ?
                        (
                            <p onClick={pinValidation}>check</p>
                        ) :
                        <p onClick={pinReset}>change</p>
                }
            </div>
            {
                pinValidate && (
                    <div className="deliveryOptions">
                        <div className="options">
                            <TbTruckDelivery className="icon" />
                            <h3>Get it by {expectedDay}, {expectedMonth} {expectedDate}</h3>
                        </div>
                        <div className="options">
                            <TbDeviceMobileDollar className="icon" />
                            <h3>Pay on delivery available</h3>
                        </div>
                        <div className="options">
                            <TbTruckReturn className="icon" />
                            <h3>Easy 14 days return & exchange available</h3>
                        </div>
                    </div>
                )
            }
            {
                !pinValidate && (
                    <div className="deliveryDetails">
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        <div className="details">
                            <p className="details">100% Original Products</p>
                            <p className="details">Pay on delivery might be available</p>
                            <p className="details">Easy 14 days returns and exchanges</p>
                        </div>

                    </div>
                )
            }
        </>
    );
}

export default CheckPincode;