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

app.use('/auth',require('./routes/authRoute'))


app.use('/items',require('./routes/itemsRoute'))
app.use('/users',require('./routes/userRoute'))

app.use('/itemorder',require('./routes/orderRoute'))


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

