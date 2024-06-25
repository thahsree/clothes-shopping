import { useNavigate } from 'react-router-dom';
import './pleaselog.css';

function PleaseLogIn(props) {

    const navigate = useNavigate()
    return (
        <div className='pleaseLogin'>
            <div className="plogin_content">
                <h3 className='request'>PLEASE LOGIN</h3>
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <rect x="20" y="16.667" fill="#F4F5F5" width="46.666" height="66.666"></rect>
                    <polygon fill="#E0E0E0" points="24,79.333 24,16.667 20,16.667 20,83.333 66.666,83.333 66.666,79.333 "></polygon>
                    <path fill="#BDBCBC" d="M66.666,10H20c-3.665,0-6.666,3.001-6.666,6.667v66.666C13.334,86.998,16.335,90,20,90h46.666
	c3.666,0,6.667-3.002,6.667-6.667V16.667C73.333,13.001,70.332,10,66.666,10z M66.666,83.333H20V16.667h46.666V83.333z"></path>
                    <circle fill="#E53A34" cx="70" cy="40" r="16.667"></circle>
                    <path fill="#E0E0E0" d="M53.333,40c0-8.063,5.726-14.787,13.333-16.332v-4.062C56.851,21.205,49.333,29.739,49.333,40
	c0,10.261,7.517,18.794,17.333,20.394v-4.062C59.059,54.787,53.333,48.063,53.333,40z"></path>
                    <path fill="#9D9D9D" d="M70,23.333c1.142,0,2.256,0.116,3.333,0.334v-4.062c-1.086-0.177-2.198-0.272-3.333-0.272
	c-1.136,0-2.248,0.096-3.334,0.272v4.062C67.743,23.449,68.858,23.333,70,23.333z"></path>
                    <path fill="#9D9D9D" d="M70,56.666c-1.142,0-2.257-0.115-3.334-0.334v4.062c1.086,0.178,2.198,0.272,3.334,0.272
	c1.135,0,2.247-0.095,3.333-0.272v-4.062C72.256,56.551,71.142,56.666,70,56.666z"></path>
                    <path fill="#FCEAED" d="M75,32.5c-1.381,0-2.631,0.56-3.535,1.465L70,35.429l-1.465-1.465C67.63,33.06,66.38,32.5,65,32.5
	c-2.761,0-4.999,2.237-4.999,5c0,1.38,0.559,2.63,1.464,3.535l7.355,7.646c0.648,0.645,1.71,0.645,2.358,0l7.355-7.646
	C79.439,40.13,80,38.88,80,37.5C80,34.739,77.76,32.5,75,32.5z"></path>
                    <path fill="#F9CCD2" d="M65.465,41.035C64.56,40.13,64,38.88,64,37.5c0-2.051,1.234-3.81,2.999-4.581
	C66.387,32.651,65.711,32.5,65,32.5c-2.761,0-4.999,2.237-4.999,5c0,1.38,0.559,2.63,1.464,3.535l7.355,7.646
	c0.648,0.645,1.71,0.645,2.358,0L72,47.827L65.465,41.035z"></path>
                    <rect x="26.667" y="30" fill="#455A64" width="20" height="6.667"></rect>
                    <rect x="26.667" y="43.333" fill="#455A64" width="20" height="6.666"></rect>
                    <rect x="26.667" y="56.666" fill="#455A64" width="26.666" height="6.667"></rect>
                    <rect x="26.667" y="70" fill="#455A64" width="33.334" height="6.666"></rect>
                    <rect x="26.667" y="30" fill="#263238" width="4" height="6.667"></rect>
                    <rect x="26.667" y="43.333" fill="#263238" width="4" height="6.666"></rect>
                    <rect x="26.667" y="56.666" fill="#263238" width="4" height="6.667"></rect>
                    <rect x="26.667" y="70" fill="#263238" width="4" height="6.666"></rect>
                </svg>
                <p>Login to view items in your wishlist.</p>
                <button className='login_button' onClick={()=> navigate('/login') }>LOGIN</button>
            </div>
        </div>
    );
}

export default PleaseLogIn;