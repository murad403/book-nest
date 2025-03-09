require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
// -----------------------------------------------------------------------------------------------

app.use(cors);
app.use(express.json());
// -----------------------------------------------------------------------------------------------

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nuqw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    app.get('/', async(req, res) =>{
        res.send("Book Nest server is running");
    })
}
// -----------------------------------------------------------------------------------------------

main()
.then(() =>console.log("Mongoose connected Successfully"))
.catch(err => console.log(err));
app.listen(port, () =>{
    console.log(`Book Nest server is running on Port ${port}`);
})