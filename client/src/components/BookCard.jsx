import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cart/cartSlice';

const BookCard = ({book}) => {
    const {title, description, oldPrice, newPrice, coverImage, _id} = book;
    const dispatch = useDispatch();
    const handleAddToCart = book =>{
        dispatch(addToCart(book));
    }
    return (
        <div className='flex items-center justify-between gap-2 bg-white rounded-md pr-3'>
            <Link to={`/book/${_id}`} className='w-[500px] h-72 overflow-hidden'>
                <img className='w-full h-full hover:scale-[105%] transition-all duration-300 rounded-l-md' src={coverImage} alt="" />
            </Link>
            <div className='w-full py-2 flex flex-col justify-between h-72'>
                <Link to={`/book/${_id}`}>
                    <h2 className='text-2xl font-medium hover:text-blue-600'>{title}</h2>
                </Link>
                <p className='text-[17px] text-slate-700'>{description.length > 50 && description.slice(0,60)}...</p>
                <div className='flex gap-5 items-center'>
                    <p>${newPrice}</p>
                    <p className='text-slate-600 line-through'>${oldPrice}</p>
                </div>
                <button onClick={() => handleAddToCart(book)} className='bg-amber-300 py-1 cursor-pointer flex gap-3 items-center w-full hover:bg-amber-400 justify-center rounded-sm text-white font-semibold'><AiOutlineShoppingCart></AiOutlineShoppingCart> Add to basket</button>
            </div>
        </div>
    );
};

export default BookCard;