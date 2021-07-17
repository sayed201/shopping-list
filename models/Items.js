const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemsSchema =new Schema({
    name : {
        type :String,
        require:true
    },
    data: {
        type : Date,
        default: Date.now
    }
});

module.exports = Items =  mongoose.model('item',ItemsSchema);