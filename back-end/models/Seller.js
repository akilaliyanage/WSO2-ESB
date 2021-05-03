const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const sellerScheema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profileImg:{
        type: String,
        required: true
    }

})

const  Seller = mongoose.model("Seller",sellerScheema);
module.exports = Seller;