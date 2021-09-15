const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const drinksSchema = new Schema({
    orderproducts:{
        type:String,
        require:[true, "Write the drink's name"]
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

module.exports = model("Drinks", drinksSchema)