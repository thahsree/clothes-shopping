import Headroom from 'react-headroom';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
function Root(props) {
    return (
        <>
            <Headroom>
                <Navbar />
            </Headroom>
            
            <Outlet />
        </>
    );
}

export default Root;