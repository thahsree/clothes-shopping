
import { globalBrands, worthyBrandSection } from '../../Data/dummyDatas';
import Banner from '../../components/Banner/Banner';
import Corousal from '../../components/Corousal/Corousal';
import './home.css';

function Home(props) {
    
    return (
        <div className='home'>
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