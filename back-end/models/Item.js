const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const itemScheema = new Schema({

    sellerID:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    itemCount:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    itemImage:{
        type: String,
        required: true
    }

})

const  Item = mongoose.model("Item",itemScheema);
module.exports = Item;