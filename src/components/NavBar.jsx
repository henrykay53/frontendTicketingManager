import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (

        <div>
            <header className='flex justify-between items-center mx-4 mt-4 '>
                <h1 className='font-bold text-xl'>FrontendTicketingManager</h1>
                <div className='flex gap-4'>
                    <button className='bg-yellow-500 text-white py-2 px-10 rounded-lg '><Link to="/login">Login</Link></button>
                    <button className='bg-yellow-500 text-white py-2 px-10 rounded-lg '><Link to="/register">Register</Link></button>
                    
                
                </div>
            </header>
            
        </div>

        


    )
}

export default NavBar;
