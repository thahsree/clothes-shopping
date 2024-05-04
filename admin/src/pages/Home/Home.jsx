import { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideNav/SideBar';
import Widget from '../../components/widgets/Widget';
import { authContext } from '../../context/AuthContext';
import './home.css';

function Home(props) {
    const { admin, error, loading, dispatch } = useContext(authContext)

    useEffect(()=>{
        console.log('====================================');
        console.log(admin);
        console.log('====================================');
    })
    return (
        <div className='home'>
            <SideBar />
            <div className="body">
                <NavBar />
                <div className="widgets">
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earnings' />
                    <Widget type='balance' />
                </div>
            </div>
        </div>
    );
}

export default Home;