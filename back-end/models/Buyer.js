const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const buyerScheema = new Schema({
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
        required: false
    }

})

const  Buyer = mongoose.model("Buyer",buyerScheema);
module.exports = Buyer;