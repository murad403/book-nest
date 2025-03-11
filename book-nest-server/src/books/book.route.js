const express = require("express");
const Book = require("./book.model");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

router.post('/create-book', verifyAdminToken, async(req, res) =>{
    try {
        // console.log("rev", req.body);
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "New Book Added", book: newBook});
    } catch (error) {
        // console.log(error);
        res.status(400).send({message: "Failed to add book"});
    }
})
router.get('/get-books', async(req, res) =>{
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send({message: "Failed to get books"});
    }
})
router.get('/get-book/:id', async(req, res) =>{
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({message: "Book not found"});
    }
})
router.put('/edit/:id', verifyAdminToken, async(req, res) =>{
    try {
        const bookId = req.params.id;
        const updateBook = req.body;
        const book = await Book.findByIdAndUpdate(bookId, updateBook, {new: true});
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({message: "Failed to update a books"});
    }
})
router.delete('/delete-book/:id', verifyAdminToken, async(req, res) =>{
    try {
        const bookId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(bookId);
        res.status(200).send({message: "deleted successfully", book: deleteBook});
    } catch (error) {
        res.status(500).send({message: "Failed to delete a books"});
    }
})

module.exports = router;