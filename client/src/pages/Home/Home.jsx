
import { useContext } from 'react';
import { globalBrands, worthyBrandSection } from '../../Data/dummyDatas';
import Banner from '../../components/Banner/Banner';
import Corousal from '../../components/Corousal/Corousal';
import { modeContext } from '../../context/DarkMode';
import '../../styles/darkMode.css';
import './home.css';

function Home(props) {

    const {darkMode} = useContext(modeContext)
    
    
    return (
        <div className={darkMode ? 'dark home' : 'home'}>
            <div className="home_middle">
                <div>
                    <Banner/>
                </div>
                <div className="home_item">
                    <h1>W O R T H Y B R A N D S</h1>
                    <Corousal lists={worthyBrandSection}/>
                </div>
                <div className="home_item">
                    <h1>G L O B A L B R A N D S</h1>
                    <Corousal lists={globalBrands}/>
                </div>

            </div>
            <div className="home_bottom">
                
            </div>
        </div>
    );
}

export default Home;