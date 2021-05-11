const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const cartScheema = new Schema({
    items: {
        type: Array,
        required:true
    },
    total:{
        type: Number,
        required: true
    },
    buyerId:{
        type:String,
        required:true
    }


})

const  CartItems = mongoose.model("CartItems",cartScheema);
module.exports = CartItems;