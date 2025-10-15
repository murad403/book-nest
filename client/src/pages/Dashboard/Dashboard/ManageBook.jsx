import React from 'react';
import { useAllBooksQuery, useDeleteBookMutation } from '../../../redux/features/books/booksApi';
import { Link } from 'react-router-dom';

const ManageBook = () => {
    const {data: books = []} = useAllBooksQuery();
    const [deleteBook] = useDeleteBookMutation();
    const handleDelete = async(id) =>{
        try {
            await deleteBook(id);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex justify-center w-full md:p-20'>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-white w-full">
                <table className="table md:table-fixed">
                    <caption className='pt-2 text-xl font-semibold'>All Books</caption>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Book Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) =>
                                <tr key={book?._id}>
                                    <th>{index + 1}</th>
                                    <td>{book?.title}</td>
                                    <td>{book?.category}</td>
                                    <td>{book?.newPrice}</td>
                                    <td className='space-x-2'>
                                        <Link to={`edit-book/${book?._id}`}>Edit</Link>
                                        <Link><button onClick={() =>handleDelete(book?._id)} className='cursor-pointer bg-red-500 hover:bg-rose-400 rounded-sm px-2 text-white'>Delete</button></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBook;