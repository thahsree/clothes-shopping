import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Crumps({ category,data ,subData,id}) {
    return (
        <div className='crumps'>
            <Breadcrumbs aria-label="breadcrumb" style={{fontSize:"13px"}}>
                <Link underline="hover" color="inherit" href="/">
                    HOME
                </Link>
                {
                    category&&
                    <Typography color="text.primary" style={{fontSize:"13px"}}>{category}</Typography>
                }
                {
                    data&&
                    <Typography color="text.primary" style={{fontSize:"13px"}}>{data}</Typography>
                }
                {
                    subData &&
                    <Typography color="text.primary" style={{fontSize:"13px"}}>{subData}</Typography>
                }
                {
                    id&&
                    <Typography color="text.primary" style={{fontSize:"13px"}}>{id}</Typography>
                }
            </Breadcrumbs>
        </div>
    );
}

export default Crumps;