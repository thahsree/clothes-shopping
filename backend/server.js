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

<<<<<<< HEAD
=======

var whitelist = [ '*']
var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
    origin:"*",
  credentials: true
}
app.use(cors(corsOptions))
>>>>>>> d87c2ef816c6448d5afd55f84fe7126873b947b1
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

