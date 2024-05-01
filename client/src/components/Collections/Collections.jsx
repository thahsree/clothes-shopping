import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './collections.css';


function Collections(props) {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('collection ',location.state);
    })

    const handleViewItem = (id)=>{

        navigate(`/products/${id}`, { state: { ...location.state,id} });
    }
    return (
        <div className='collectionsMain'>
            <Grid container spacing={5} style={{ width: '80vw' }} justifyContent="space-evenly">
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2.4}>
                    <div className="displayItem" onClick={()=> handleViewItem('123')}>
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/61-KT85vXdL._AC_SX679_.jpg" alt="" />
                            <div className="rating">
                                <p>8.9</p>
                                <StarIcon className='icon'/>
                            </div>
                        </div>
                        <div className="details">
                            <h3>BULLMER</h3>
                            <p>Print Oversized Cotton T-Shirt</p>
                            <div className="pay">
                                <p className="price">₹239</p>
                                <strike>₹799</strike>
                                <p className="offer">(70% OFF)</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                
                
            </Grid>
        </div>
    );
}

export default Collections;