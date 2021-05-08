const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session');
const cors = require('cors')

//Session Creation
app.use(session({ 
    secret:'OTP-Secret',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:true , maxAge:10000}
}))



require('dotenv/config')

//Import Routes
const DeliveryRoutes = require('./routes/DeliveryRoutes');
const userRouter = require('./routes/UserRoute.js');
const itemRouter = require('./routes/ItemRoute.js');
const cardPaymentGatewayRouter = require('./routes/CardPaymentGatewayRoutes');
const mobilePaymentGatewayRouter = require('./routes/MobilePaymentGatewayRoutes');
const PaymentRouter = require('./routes/PaymentRoutes');
const locationsRouter = require('./routes/LocationRoutes');

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname, '../public/media')));
// const buildPath = path.normalize(path.join(__dirname, '../public/media'));
// app.use(express.static(buildPath));
app.use('/delivery',DeliveryRoutes);
app.use("/user",userRouter);
app.use("/item",itemRouter);
app.use("/cardPayment",cardPaymentGatewayRouter);
app.use("/mobilePayment",mobilePaymentGatewayRouter);
<<<<<<< HEAD
app.use("/Payment",PaymentRouter);
=======
app.use("/locations",locationsRouter);
>>>>>>> 1c2681b5b6be83dff1630ffff9aa15e23285c7b1




//connecting to the database
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology:true},
    () =>{
        console.log("connected to the database")
    }
)


//server start
app.listen(9000);