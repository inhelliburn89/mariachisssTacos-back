const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const productSchema = new Schema({
    productname:{
        type:String,
        require:[true, "Write the produt's name"]
    },
    price:{
        type: String,
        required:[true,"The price must be > $0"],
        min: [1,"The price cannot be 0"]
    },
   
    ingredients:{
        type: String,
        required: [true, "You must write the products' ingredients "]
    },
    image:{
        type: String
    }
},{timestamps:true});

module.exports = model("Products",productSchema)