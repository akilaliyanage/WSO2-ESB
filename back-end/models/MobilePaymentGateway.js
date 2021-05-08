const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const mobilePaymentGatewaySchema = new Schema({
    accHolderName:{
        type: String,
        required: true
    },
    mobileNo:{
        type: String,
        required: true
    },
    accNo:{
        type: String,
        required: true
    },
    NIC:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false
    }

})

const  mobileGateway = mongoose.model("mobilePaymentGateway",mobilePaymentGatewaySchema);
module.exports = mobileGateway;