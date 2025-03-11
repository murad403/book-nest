const express = require("express");
const Order = require("./order.model");
const router = express.Router();

router.post('/', async(req, res) =>{
    try {
        const newOrder = await Order(req.body);
        await newOrder.save();
        res.status(200).send({message: "New order created", order: newOrder});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Faild to Booking"});
    }
})
router.get('/email/:email', async(req, res) =>{
    try {
        const orders = await Order.find({email: req.params.email}).sort({createdAt: -1});
        res.status(200).send({message: "Get all orders", orders})
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Failed to get user order"});
    }
})
module.exports = router;