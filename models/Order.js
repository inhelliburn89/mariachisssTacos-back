const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const orderSchema = new Schema({
    orderproducts:{
        type:[Schema.Types.ObjectId],ref:"Products",
        require:[true, "Write the order's products"]
    },
    ordernumber:{
        type:String,
        require:[true, "Write the order's number"]
    },
    total:{
        type: String,
        required:[true,"The price must be > $0"],
        min: [1,"The price cannot be 0"]
    },
    status:{
        type: String,
        enum : ['IN PROCESS','READY'],
    }
},{timestamps:true});

module.exports = model("Order",orderSchema)