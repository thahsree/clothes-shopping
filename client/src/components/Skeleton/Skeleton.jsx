
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.css';

function SkeletonLoading({type}) {

    
    return (
        <div className={type+'Main'}>
            <Skeleton  className={type}/>
        </div>
    );
}

export default SkeletonLoading;