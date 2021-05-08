const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Import Routes
const DeliveryRoutes = require('./routes/DeliveryRoutes');
const userRouter = require('./routes/UserRoute.js');
const itemRouter = require('./routes/ItemRoute.js');
<<<<<<< HEAD
const cartRouter = require('./routes/CartRoutes.js');
=======
const cardPaymentGatewayRouter = require('./routes/CardPaymentGatewayRoutes');
const mobilePaymentGatewayRouter = require('./routes/MobilePaymentGatewayRoutes');
const locationsRouter = require('./routes/LocationRoutes');
>>>>>>> 43e8b62f1c6ae850a4234257616ec9228b1ebc6f


//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('uploads'));
// app.use(express.static(path.join(__dirname, '../public/media')));
// const buildPath = path.normalize(path.join(__dirname, '../public/media'));
// app.use(express.static(buildPath));
app.use('/delivery',DeliveryRoutes);
app.use("/user",userRouter);
app.use("/item",itemRouter);
<<<<<<< HEAD
app.use("/buyer",itemRouter);
=======
app.use("/cardPayment",cardPaymentGatewayRouter);
app.use("/mobilePayment",mobilePaymentGatewayRouter);
app.use("/locations",locationsRouter);
>>>>>>> 43e8b62f1c6ae850a4234257616ec9228b1ebc6f


app.use(express.static('uploads'))



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