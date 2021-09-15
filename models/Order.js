const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const orderSchema = new Schema({
    orderproducts:{
        type:[{
            orderproducts:String,
            price:String,
            cant:Number,
            totalXcant:Number
        }],
        require:[true, "Write the order's products"]
    },
    total:{
        type: Number,
        required:[true,"The price must be > $0"],
        min: [1,"The price cannot be 0"]
    },
    status:{
        type: String,
        enum : ['IN PROCESS','READY'],
    }
},{timestamps:true});

module.exports = model("Orders",orderSchema)