import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useAuth } from '../Providers/AuthProvider';
import profile from '../assets/banner/attractive-young-men-black-isolated-white-background_58409-11027.avif';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const {user, logout} = useAuth();

    const handleLogout = () =>{
        logout();
    }
    return (
        <header className='md:px-[30px] px-5 py-4'>
            <nav className='flex justify-between gap-2 md:gap-0 items-center'>
                <div className='flex items-center md:gap-7 gap-1'>
                    <Link to={'/'}><RiMenu2Fill className='text-xl'></RiMenu2Fill></Link>
                    <div className='relative'>
                        <input type="text" placeholder='search' className='bg-slate-200 text-black font-medium rounded-sm focus:outline-none pl-8 py-1 w-full' />
                        <CiSearch className='absolute inset-y-2 left-1 text-[17px]'></CiSearch>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-[16px]'>
                    <div className='flex items-center'>
                        {
                            user 
                            ? 
                            <div className='relative' onClick={() => setOpenDropdown(!openDropdown)}>
                                <img className='w-9 h-9 cursor-pointer border border-blue-600 p-1 rounded-full' src={profile} alt="user" />
                                <div className='absolute bg-white text-[16px] w-[100px] rounded-sm -left-8 py-1'>
                                    {
                                        openDropdown && 
                                        <div>
                                            <ul className='text-center'>
                                                {
                                                    navItems.map((item, index) => 
                                                        <li key={index}>
                                                            <Link onClick={() => setOpenDropdown(false)} className='hover:bg-slate-300 px-3 rounded-sm' to={item.path}>{item.name}</Link>
                                                        </li>
                                                    )
                                                }
                                                <li>
                                                    <button onClick={handleLogout} className='hover:bg-slate-300 px-3 rounded-sm cursor-pointer'>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div> 
                            :
                            <Link to={'/login'}><FaRegUser></FaRegUser></Link>
                        }
                    </div>
                    <Link className='sm:block hidden'><FaRegHeart></FaRegHeart></Link>
                    <Link to={'/cart'} className='bg-amber-300 sm:px-4 text-white px-2 py-1 rounded-sm flex items-center gap-2'>
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                        <span className='text-[14px]'>{cartItems.length}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
const navItems = [
    {name: "Orders", path: "/orders"},
    {name: "Cart", path: "/cart"},
    {name: "Check Out", path: "/checkout"},
]
export default Navbar;