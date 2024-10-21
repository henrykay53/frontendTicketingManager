import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ searchTerm, searchHandler }) => {
  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between items-center mx-4 mt-4 space-y-4 md:space-y-0">
        {/* Logo */}
        <h1 className="font-bold text-2xl md:text-3xl">FrontendTicketingManager</h1>

        {/* Search Input */}
        <input
          className="ring-2 focus:outline-yellow-400 rounded-sm p-2 md:p-3 w-full md:w-[50%] transition"
          type="text"
          value={searchTerm}
          onChange={searchHandler}
          placeholder="Search events by name, category..."
        />

        {/* Buttons */}
        <div className="flex gap-2 md:gap-4">
          <Link to="/login">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition font-bold text-white py-2 px-8 md:px-14 rounded-lg w-full md:w-auto">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition font-bold text-white py-2 px-8 md:px-14 rounded-lg w-full md:w-auto">
              Register
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
