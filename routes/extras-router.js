const { Router } = require('express');
const router = Router();
const {createExtra,deleteExtra,updateExtra,getAllExtras} = require("../controllers/extras-controller");
const uploader = require("../helpers/cloudinary");

router.post('/create',uploader.single("image"),createExtra);

router.delete("/delete/:id",deleteExtra);

router.patch("/update/:id",updateExtra)

router.get('/all',getAllExtras);


module.exports = router;

