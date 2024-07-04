import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { authContext } from '../../context/AuthContext';
import './sidebar.css';
function SideBar(props) {

    const { admin, error, loading, dispatch } = useContext(authContext)

    const cookies = new Cookies()

    const handleLogout = ()=>{

        dispatch({ type: "LOGOUT"});
        localStorage.removeItem('PersistLogin')
        cookies.remove('accessToken')

        
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin</span>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to='/' style={{ textDecoration: "none" }}>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <p className="title">LISTS</p>
                    <li>
                        <Link to='/buyers' style={{ textDecoration: 'none' }}>
                            <Person2OutlinedIcon className='icon' />
                            <span>USERS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/products' style={{ textDecoration: 'none' }}>
                            <Inventory2OutlinedIcon className='icon' />
                            <span>MY PRODUCTS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/add-products' style={{ textDecoration: 'none' }}>
                            <Inventory2OutlinedIcon className='icon' />
                            <span>ADD PRODUCTS</span>
                        </Link>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <AnalyticsOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <AccountBoxOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <LoginOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default SideBar;