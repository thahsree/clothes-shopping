
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.css';

function SkeletonLoading({type}) {

    useEffect(()=>{
        console.log('====================================');
        console.log(type);
        console.log('====================================');
    })
    return (
        <div className={type+'Main'}>
            <Skeleton  className={type}/>
        </div>
    );
}

export default SkeletonLoading;