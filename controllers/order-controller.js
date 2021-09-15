const bcrypt = require('bcrypt');
const passport = require('../helpers/passport');
const Order = require("../models/Order");


exports.createOrder =  (req,res) =>{

    
    const {orderproducts,ordernumber,total,status,...restOrder} = req.body
    console.log("elreq",req.body)
    
    Order.create({...req.body })
    .then(order => {
      res.status(201).json({ msg: "Order succesfully created!" ,order});
    })
    .catch(error=>{
        res.status(400).json({msg:"Cannot create the Order",error})
    })
}

exports.deleteOrder = (req,res)=>{
    const {id} = req.params
    Order.findByIdAndRemove(id)
    .then(()=>{
      res.json({msg:"Order deleted"})
    })
    .catch(error=>{
      res.json({msg:error.msg})
    })
  }

exports.updateOrder = (req, res)=>{
    
    const { id } = req.params

    Order.findByIdAndUpdate(id, req.body,{new:true} )
    .then(updateExtra => {
        res.status(200).json({result:updateExtra})
    })
    .catch(error=>res.status(400).json({ error }))
}

exports.getAllOrders = (req,res)=>{
    Order.find()
    .then(extras=>{
      res.json({extras})
    })
    .catch(error =>{
      res.json({msg:error.message})
    })
  }