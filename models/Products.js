const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const productSchema = new Schema({
    productname:{
        type:String,
        require:[true, "Write the product's name"]
    },
    price:{
        type: String,
        required:[true,"The price must be > $0"],
        min: [1,"The price cannot be 0"]
    },
    ingredients:{
        type: String,
    },
    image:{
        type: String
    }
},{timestamps:true});

module.exports = model("Products",productSchema)