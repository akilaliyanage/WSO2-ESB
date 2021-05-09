const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const Payment = new Schema({
    orderId:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    cardNo:{
        type: String,
        required: false
    },
    Ammount:{
        type: String,
        required: true
    },
    accNo:{
        type: String,
        required: false
    },
    type:{
        type: String,
        required: true
    }

})

const  Payment_Model = mongoose.model("Payment",Payment);
module.exports = Payment_Model;