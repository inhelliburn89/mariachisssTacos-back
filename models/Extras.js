const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const extrasSchema = new Schema({
    extraname:{
        type:String,
        require:[true, "Write the extra's name"]
    },
    price:{
        type: String,
        required:[true,"The price must be > $0"],
        min: [1,"The price cannot be 0"]
    },
    image:{
        type: String
    }
},{timestamps:true});

module.exports = model("Extras",extrasSchema)