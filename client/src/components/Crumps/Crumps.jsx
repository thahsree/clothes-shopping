import Breadcrumbs from '@mui/material/Breadcrumbs';

import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { modeContext } from '../../context/DarkMode';

function Crumps({ category,data ,subData,id}) {

    const {darkMode} = useContext(modeContext)
    return (
        <div className='crumps'>
            <Breadcrumbs aria-label="breadcrumb" separator="/" style={{fontSize:"13px",color:`${darkMode ? 'gray': '#333'}` }}>
                <Link style={{color:`${darkMode ? 'gray': 'inherit' }` , textDecoration:'none'}} to='/'>
                    HOME
                </Link>
                {
                    category&&
                    <Typography color={darkMode ? 'lightgray': 'text.primary'} style={{fontSize:"13px"}}>{category}</Typography>
                }
                {
                    data&&
                    <Typography color={darkMode ? 'lightgray': 'text.primary'}  style={{fontSize:"13px"}}>{data}</Typography>
                }
                {
                    subData &&
                    <Typography color={darkMode ? 'lightgray': 'text.primary'}  style={{fontSize:"13px"}}>{subData}</Typography>
                }
                {
                    id&&
                    <Typography color={darkMode ? 'lightgray': 'text.primary'}  style={{fontSize:"13px"}}>{id}</Typography>
                }
            </Breadcrumbs>
        </div>
    );
}

export default Crumps;