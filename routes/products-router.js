const { Router } = require('express');
const router = Router();
const {createProduct,updateProduct,deleteProduct,getAllProds} = require("../controllers/product-controller");
const uploader = require("../helpers/cloudinary");

router.post('/create',uploader.single("image"),createProduct);

router.delete("/delete/:id",deleteProduct);

router.patch("/update/:id",updateProduct)

router.get('/all',getAllProds);


module.exports = router;

