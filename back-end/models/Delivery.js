const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const deliverySchema = new Schema({
    username:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    resName:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    delAdd:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    locType:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    itemCode:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }

})

const  Buyer = mongoose.model("delivery",deliverySchema);
module.exports = Buyer;