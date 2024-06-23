import Grid from '@mui/material/Grid';
import * as React from 'react';
import './itemImage.css';


function ItemImage({images}) {
    return (
        <div className='images_single'>
            <Grid container spacing={1}>
                {
                    images.map((url,i) => (
                        <Grid item xs={6} key={i}>
                            <img src={url} alt="product-image" className='image' />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default ItemImage;