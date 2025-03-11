const express = require("express");
const User = require("./user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_TOKEN;

router.post("/admin", async(req, res) =>{
    const {userName, password} = req.body;
    try {
        const admin = await User.findOne({userName});
        if(!admin){
            res.status(404).send({message: "Admin not found"});
        }
        if(password !== admin.password){
            res.status(401).send({message: "Invalid password"});
        }
        const token = jwt.sign(
            {id: admin._id, userName: admin.userName, role: admin.role},
            secret,
            {expiresIn: "7d"}
        )
        return res.status(200).send({message: "Authentication successfull", token, user:{
            userName: admin.userName,
            role: admin.role
        }})
    } catch (error) {
        console.log(`Failed to login as Admin ${error}`);
        res.status(401).send({message: "Failed to login as Admin"});
    }
})

module.exports = router;