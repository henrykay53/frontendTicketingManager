import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (

        <div>
            <header className='flex justify-between items-center'>
                <h1>FrontendTicketingManager</h1>
                <div className='flex gap-10'>
                    <button className='w-[50%] lg:w-[70%] bg-yellow-500 hover:bg-yellow-300 text-white text-lg px-10 lg:px-5 py-2  font-bold rounded-lg my-4 '><Link to='/login'><span className='text-yellow-400'>Log In</span></Link></button>
                    <button className='w-[50%] bg-yellow-500 hover:bg-yellow-300 text-white text-lg px-10  py-2  font-bold rounded-lg my-4 '><Link to='/register'><span className='text-yellow-400'>Sign Up</span></Link></button>
                </div>
            </header>
        </div>


    )
}

export default NavBar;
