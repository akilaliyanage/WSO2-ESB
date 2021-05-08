const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const cardPaymentGatewaySchema = new Schema({
    cardHolderName:{
        type: String,
        required: true
    },
    cardNo:{
        type: String,
        required: true
    },
    CVC:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    expDate:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }

})

const  cardGateway = mongoose.model("cardPaymentGateway",cardPaymentGatewaySchema);
module.exports = cardGateway;