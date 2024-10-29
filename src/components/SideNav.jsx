import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideNav } from '../redux/slice/sideNavSlice';
import { 
  Menu, 
  CloseSquare, 
  ArrowDown2, 
  ArrowUp2, 
  Music, 
  Star, 
  Car, 
  Paintbucket, // Icon for Arts
} from 'iconsax-react';

const categories = [
  { name: 'Sports', subCategories: ['Football', 'Basketball', 'Tennis', 'Cricket'], icon: <Star size="20" /> },
  { name: 'Concerts', subCategories: ['Rock', 'Jazz', 'Classical', 'Pop'], icon: <Music size="20" /> },
  { name: 'Fashion', subCategories: ['Runways', 'Trends', 'Designers', 'Events'], icon: <Star size="20" /> },
  { name: 'Music', subCategories: ['Albums', 'Singles', 'Music Videos', 'Festivals'], icon: <Music size="20" /> },
  { name: 'Arts', subCategories: ['Painting', 'Sculpture', 'Photography', 'Exhibitions'], icon: <Paintbucket size="20" /> }, // Changed to Paintbucket
  { name: 'Cars', subCategories: ['Electric Cars', 'SUVs', 'Sports Cars', 'Concept Cars'], icon: <Car size="20" /> },
];

const SideNav = ({ searchTerm, searchHandler }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sideNav.isOpen); 
  const [openCategory, setOpenCategory] = useState(null);

  
  const toggleNav = () => {
    dispatch(toggleSideNav()); // Dispatch the action
  };
  const toggleCategory = (category) =>
    setOpenCategory(openCategory === category ? null : category);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="p-3 bg-yellow-500 fixed top-4 left-8 z-50 rounded-full shadow-lg hover:bg-yellow-600 transition"
        onClick={toggleNav}
      >
        {isOpen ? <CloseSquare size="28" color="white" /> : <Menu size="28" color="white" />}
      </button>

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl w-72 p-8 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
       

        {/* Search Input */}
        <div className="relative mt-16 mb-8">
          <input
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
            value={searchTerm}
            onChange={searchHandler}
            placeholder="Search events..."
          />
        </div>

        {/* Categories */}
        <ul className="space-y-6">
          {categories.map((category) => (
            <li key={category.name} className="flex flex-col">
              <div
                className="flex items-center justify-between p-4 rounded-md bg-gray-700 hover:bg-gray-600 cursor-pointer"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center space-x-4">
                  {category.icon}
                  <span className="text-lg font-medium">{category.name}</span>
                </div>
                {openCategory === category.name ? (
                  <ArrowUp2 size="20" color="white" />
                ) : (
                  <ArrowDown2 size="20" color="white" />
                )}
              </div>

              {/* Sub-categories Dropdown */}
              {openCategory === category.name && (
                <ul className="ml-8 mt-2 space-y-3">
                  {category.subCategories.map((subCategory) => (
                    <li
                      key={subCategory}
                      className="p-2 rounded-md hover:bg-gray-600 cursor-pointer text-gray-300"
                    >
                      {subCategory}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
