import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../redux/features/books/booksApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Book = () => {
    const {id} = useParams();
    const {data: book = {}} = useGetBookByIdQuery(id);
    const dispatch = useDispatch();
    const handleAddToCart = book =>{
        dispatch(addToCart(book));
    }
    return (
        <div className='p-5 shadow-2xl rounded-sm inline-block space-y-2'>
            <h2 className='text-3xl font-semibold text-gray-700'>{book?.title}</h2>
            <img className='rounded-sm w-72' src={book?.coverImage} alt="" />
            <p className='text-sm'><span className='font-bold'>Author: </span>{book?.author}</p>
            <p className='text-sm'><span className='font-bold'>Published: </span>{book?.createdAt}</p>
            <p className='text-sm'><span className='font-bold'>Category: </span>{book?.category}</p>
            <p className='text-sm'><span className='font-bold'>Description: </span>{book?.description}</p>
            <button onClick={() => handleAddToCart(book)} className='bg-amber-300 py-1 cursor-pointer flex gap-3 items-center w-full hover:bg-amber-400 justify-center rounded-sm text-white font-semibold mt-3'><AiOutlineShoppingCart></AiOutlineShoppingCart> Add to basket</button>
        </div>
    );
};

export default Book;