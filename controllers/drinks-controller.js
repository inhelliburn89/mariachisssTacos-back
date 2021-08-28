const bcrypt = require('bcrypt');
const passport = require('../helpers/passport');
const Drinks = require("../models/Drinks");


exports.createDrink =  (req,res) =>{

    let image
    if(req.file){
      image = req.file.path
    }
    const {drinkname,price,...restDrink} = req.body
    
    
    Drinks.create({...req.body,image })
    .then(drink => {
      res.status(201).json({ msg: "Drink succesfully created!" ,drink});
    })
    .catch(error=>{
        res.status(400).json({msg:"Cannot create the drink",error})
    })
}

exports.deleteDrink = (req,res)=>{
    const {id} = req.params
    Drinks.findByIdAndRemove(id)
    .then(()=>{
      res.json({msg:"Drink deleted"})
    })
    .catch(error=>{
      res.json({msg:error.msg})
    })
  }

exports.updateDrink = (req, res)=>{
    
    const { id } = req.params

    Drinks.findByIdAndUpdate(id, req.body,{new:true} )
    .then(updateDrink => {
        res.status(200).json({result:updateDrink})
    })
    .catch(error=>res.status(400).json({ error }))
}

exports.getAllDrinks = (req,res)=>{
    Drinks.find()
    .then(drinks=>{
      res.json({drinks})
    })
    .catch(error =>{
      res.json({msg:error.message})
    })
  }