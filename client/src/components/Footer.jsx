import React from 'react';
import footerLogo from "../assets/banner/footer-logo.png"
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='md:px-[30px] px-5 py-2 text-[#0D0842] bg-gray-400 mt-10'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-3'>
                <div>
                    <div className='flex items-center justify-center'>
                        <img className='w-36' src={footerLogo} alt="" />
                    </div>
                    <div className='space-x-4'>
                        <Link to={'/'} className='text-[15px]'>About</Link>
                        <Link to={'/'} className='text-[15px]'>Features</Link>
                        <Link to={'/'} className='text-[15px]'>Pricing</Link>
                        <Link to={'/'} className='text-[15px]'>Gellary</Link>
                        <Link to={'/'} className='text-[15px]'>Team</Link>
                    </div>
                </div>
                <div className='mt-10 md:mt-0'>
                    <p className='text-[16px]'>Subscribe to stay tuned for new product and latest updates. Let’s do it!</p>
                    <form className='mt-3 flex justify-center'>
                        <input className='border border-amber-300 outline-none px-5 py-1 rounded-tl-sm rounded-bl-sm' type="email" placeholder='Enter your email address'/>
                        <input className='bg-amber-300 hover:bg-amber-400 py-1 px-2 text-white font-semibold rounded-tr-sm rounded-br-sm cursor-pointer' type="submit" value={"Subscribe"} />
                    </form>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between py-2 border-t border-gray-400'>
                <div className='space-x-4'>
                    <Link to={'/'} className='text-[15px]'>Privacy Policy</Link>
                    <Link to={'/'} className='text-[15px]'>Terms of Use</Link>
                    <Link to={'/'} className='text-[15px]'>Sales and Refunds</Link>
                    <Link to={'/'} className='text-[15px]'>Legal</Link>
                </div>
                <div className='flex items-center gap-5 mt-3 text-xl md:mt-0'>
                    <Link><FaInstagramSquare></FaInstagramSquare></Link>
                    <Link><FaGoogle></FaGoogle></Link>
                    <Link><FaFacebook></FaFacebook></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;