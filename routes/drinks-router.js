const { Router } = require('express');
const router = Router();
const {createDrink,deleteDrink,updateDrink,getAllDrinks} = require("../controllers/drinks-controller");
const uploader = require("../helpers/cloudinary");

router.post('/create',uploader.single("image"),createDrink);

router.delete("/delete/:id",deleteDrink);

router.patch("/update/:id",updateDrink)

router.get('/all',getAllDrinks);


module.exports = router;

