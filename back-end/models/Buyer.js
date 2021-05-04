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
    hashedPassword:{
        type: String,
        required: true
    },
    profileImg:{
        type: String,
        required: true
    }

})

const  Buyer = mongoose.model("Buyer",buyerScheema);
module.exports = Buyer;