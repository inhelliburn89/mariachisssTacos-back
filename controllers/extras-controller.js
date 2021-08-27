const bcrypt = require('bcrypt');
const passport = require('../helpers/passport');
const Extras = require("../models/Extras");


exports.createExtra =  (req,res) =>{

    let image
    if(req.file){
      image = req.file.path
    }
    const {extraname,price,...restExtra} = req.body
    
    
    Extras.create({...req.body,image })
    .then(extra => {
      res.status(201).json({ msg: "Extra succesfully created!" ,extra});
    })
    .catch(error=>{
        res.status(400).json({msg:"Cannot create the product",error})
    })
}

exports.deleteExtra = (req,res)=>{
    const {id} = req.params
    Extras.findByIdAndRemove(id)
    .then(()=>{
      res.json({msg:"Extra deleted"})
    })
    .catch(error=>{
      res.json({msg:error.msg})
    })
  }

exports.updateExtra = (req, res)=>{
    
    const { id } = req.params

    Extras.findByIdAndUpdate(id, req.body,{new:true} )
    .then(updateExtra => {
        res.status(200).json({result:updateExtra})
    })
    .catch(error=>res.status(400).json({ error }))
}

exports.getAllExtras = (req,res)=>{
    Extras.find()
    .then(extras=>{
      res.json({extras})
    })
    .catch(error =>{
      res.json({msg:error.message})
    })
  }