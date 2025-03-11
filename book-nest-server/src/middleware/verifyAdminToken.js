const jwt = require("jsonwebtoken");
const secret = process.env.JWT_TOKEN;

const verifyAdminToken = (req, res, next) =>{
    const token = req.headers["authorization"]?.split(' ')[1];
    if(!token){
        return res.status(401).send({message: "Unauthrized access"});
    }
    jwt.verify(token, secret, (err, decode) =>{
        if(err){
            return res.status(403).send({message: "Invalid credentials"});
        }
        req.user = decode;
        next();
    })
}

module.exports = verifyAdminToken;