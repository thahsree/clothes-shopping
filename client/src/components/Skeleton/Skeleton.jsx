
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { modeContext } from '../../context/DarkMode';
import './skeleton.css';

function SkeletonLoading({type}) {

    const {darkMode} = useContext(modeContext)
    return (
        <div className={type+'Main'}>
            <Skeleton  className={type}  highlightColor={darkMode?"#0000006a":''} baseColor={darkMode? "gray":''}/>
        </div>
    );
}

export default SkeletonLoading;