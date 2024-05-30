
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.css';

function SkeletonLoading(props) {
    return (
        <div className=''>
            <Skeleton  className='skeleton'/>
        </div>
    );
}

export default SkeletonLoading;