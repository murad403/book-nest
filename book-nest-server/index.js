require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
// -----------------------------------------------------------------------------------------------

app.use(cors(
    {
        origin: ["http://localhost:5173"],
        credentials: true
    }
));
app.use(express.json());
// -----------------------------------------------------------------------------------------------

// routes------------
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nuqw3.mongodb.net/book-nest?retryWrites=true&w=majority&appName=Cluster0`);
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