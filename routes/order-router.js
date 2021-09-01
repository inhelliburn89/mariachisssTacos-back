const { Router } = require('express');
const router = Router();
const {createOrder,deleteOrder,getAllOrders, updateOrder} = require("../controllers/order-controller");


router.post('/create',createOrder);

router.delete("/delete/:id",deleteOrder);

router.patch("/update/:id",updateOrder)

router.get('/all',getAllOrders);


module.exports = router;

