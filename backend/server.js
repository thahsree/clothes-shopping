const express = require('express');
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { verifyJWT } = require('./middleware/verifyJWT');

const cors = require('cors');
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOption');


app.use(credentials)
app.use(cors(corsOptions))


app.use(express.urlencoded({extended:false}))

app.use(express.json())
app.use(cookieParser())

dotenv.config()

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use('/v1/auth',require('./routes/authRoute'))

app.use('/v1/items',require('./routes/itemsRoute'))
app.use('/v1/users',require('./routes/userRoute'))

app.use('/v1/cart',require('./routes/cartRoute'))
app.use('/v1/wishlist',require('./routes/wishlistRoute'))
app.use('/v1/checkout',require('./routes/checkoutRoute'))
app.use('/v1/orders', require('./routes/ordersRoute'))


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB Connected");
    app.listen(4000,(req,res)=>{
        console.log('app connected on port 4000');
    })
})
.catch((err)=>{
    console.log(err);
})

