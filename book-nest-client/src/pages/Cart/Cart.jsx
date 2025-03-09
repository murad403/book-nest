import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const dispatch = useDispatch();
    const handleRemove = (item) =>{
        dispatch(removeFromCart(item));
    }
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div className='shadow-xl p-5'>
            <div className='flex justify-between items-center mb-3'>
                <h2 className='text-2xl font-medium text-gray-700'>Shopping Cart</h2>
                <button onClick={handleClearCart} className='bg-red-500 hover:bg-red-600 text-white rounded-sm px-2 font-semibold cursor-pointer'>Clear Cart</button>
            </div>
            <div>
                {
                    cartItems.length > 0 ?
                    cartItems.map(item =>
                        <div key={item?._id} className='flex flex-col md:flex-row justify-between items-start mb-3 mt-7'>
                            <div className='flex flex-col-reverse md:flex-row items-center gap-5'>
                                <img className='w-36' src={item?.coverImage} alt={item?.title} />
                                <div className='text-gray-700'>
                                    <h3 className='text-xl font-medium'>{item?.title}</h3>
                                    <p className='text-[16px]'>category: {item?.category}</p>
                                    <p>Quantity: 1</p>
                                </div>
                            </div>
                            <div className='flex md:flex-col flex-row w-full justify-between md:w-auto mt-2 md:mt-0 gap-6'>
                                <p className='font-bold'>${item?.newPrice}</p>
                                <button onClick={() =>handleRemove(item)} className='bg-gray-400 hover:bg-gray-500 font-semibold text-white cursor-pointer px-2  rounded-sm'>Remove</button>
                            </div>
                        </div>
                    ) : <p className='mb-3 text-red-400'>No product found!</p>
                }
            </div>
            <div className='w-full h-[1px] bg-gray-400 mb-3'></div>
            <div className='flex justify-between items-center mb-3'>
                <div className='text-gray-700'>
                    <h2 className='text-xl font-medium '>Subtotal</h2>
                    <p className='text-sm'>Shipping and taxes calculated at checkout</p>
                </div>
                <p className='font-bold'>${totalPrice}</p>
            </div>
            <div className='mb-3'>
                <Link to={'/checkout'}>
                    <button className='bg-blue-700 hover:bg-blue-600 text-white font-medium cursor-pointer w-full py-1  rounded-sm'>CheckOut</button>
                </Link>
            </div>
            <Link to={'/'} className='text-sm flex items-center gap-1 justify-center'><IoIosArrowRoundForward className='text-xl'></IoIosArrowRoundForward>or continue shopping</Link>
        </div>
    );
};

export default Cart;