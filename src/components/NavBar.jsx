import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({searchTerm, searchHandler}) => {


    return (

        <div>
            <header className='flex justify-between items-center mx-4 mt-4 '>
                <h1 className='font-bold text-3xl'>FrontendTicketingManager</h1>
                <input className='ring-2 focus:outline-yellow-400 rounded-sm p-3 w-[50%] ' 
                type="text"
                value={searchTerm}
                onChange={searchHandler}
                placeholder="Search events by name, category..." />
                <div className='flex gap-4'>
                    <button className='bg-yellow-400 hover:bg-yellow-500 transition font-bold text-white py-3 px-14 rounded-lg '><Link to="/login">Login</Link></button>
                    <button className='bg-yellow-400 hover:bg-yellow-500 transition font-bold text-white py-3 px-14 rounded-lg '><Link to="/register">Register</Link></button>
                    
                
                </div>
            </header>
            
        </div>

        


    )
}

export default NavBar;
