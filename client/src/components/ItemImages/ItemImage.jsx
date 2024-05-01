import Grid from '@mui/material/Grid';
import * as React from 'react';
import './itemImage.css';


function ItemImage(props) {

    const image = [
        "https://m.media-amazon.com/images/I/71hrNOTAPDL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71bslsfTW8L._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/81UgO6zw+LL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/61V3NNCergL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71hrNOTAPDL._AC_SY550_.jpg",
        "https://m.media-amazon.com/images/I/71bslsfTW8L._AC_SY550_.jpg",
    ]

    return (
        <div className='images'>
            <Grid container spacing={1}>
                {
                    image.map((url,i) => (
                        <Grid item xs={6} key={i}>
                            <img src={url} alt="" className='image' />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default ItemImage;