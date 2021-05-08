const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const LocationSchema = new Schema({
    location:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    cost:{
        type: String,
        required: true
    },
    isDeliver:{
        type: String,
        required: true
    }

})

const  location = mongoose.model("locations",LocationSchema);
module.exports = location;