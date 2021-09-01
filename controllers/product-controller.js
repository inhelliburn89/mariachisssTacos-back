const bcrypt = require('bcrypt');
const passport = require('../helpers/passport');
const Products = require("../models/Products");


exports.createProduct =  (req,res) =>{

    let image
    if(req.file){
      image = req.file.path
    }
    const {productname,price,ingredients,...restProd} = req.body
    
    
    Products.create({...req.body,image })
    .then(product => {
      res.status(201).json({ msg: "Product succesfully created!" ,product});
    })
    .catch(error=>{
        res.status(400).json({msg:"Cannot create the product",error})
    })
}

exports.deleteProduct = (req,res)=>{
    const {id} = req.params
    Products.findByIdAndRemove(id)
    .then(()=>{
      res.json({msg:"Product deleted"})
    })
    .catch(error=>{
      res.json({msg:error.msg})
    })
  }

exports.updateProduct = (req, res)=>{
    
    const { id } = req.params

    Products.findByIdAndUpdate(id, req.body,{new:true} )
    .then(updateProduct => {
        res.status(200).json({result:updateProduct})
    })
    .catch(error=>res.status(400).json({ error }))
}

exports.getAllProds = (req,res)=>{
    Products.find()
    .then(prods=>{
      res.json({prods})
    })
    .catch(error =>{
      res.json({msg:error.message})
    })
  }