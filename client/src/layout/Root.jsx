import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    // const location = useLocation().pathname;
    // ${(location !== '/login' && location !== "/register") && "min-h-screen"} 
    // console.log(location);
    return (
        <div className='space-y-4 bg-whit bg-gray-200'>
            <Navbar></Navbar>
            <main className={`px-3 md:px-10 lg:px-14 rounded-sm `}>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;