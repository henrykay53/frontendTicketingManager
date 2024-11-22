import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/usersSlice';
import { HambergerMenu, CloseSquare } from 'iconsax-react';
import ConfirmLogoutModal from '../components/Modal/ConfirmLogoutModal';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => setIsModalVisible(true);

  const confirmLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    setIsMenuOpen(false);
    setIsLoggedIn(false);
    setIsModalVisible(false);
    navigate('/');
  };

  const cancelLogout = () => setIsModalVisible(false);

  const handleLogin = () => {
    setIsMenuOpen(false);
    navigate('/login');
  };

  return (
    <>
      <nav className="bg-yellow-500 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">TicketMaster</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseSquare size="32" color="#ffffff" variant="Bold" />
          ) : (
            <HambergerMenu size="32" color="#ffffff" variant="Bold" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-yellow-500 flex flex-col space-y-4 items-center transition-transform transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } md:relative md:top-0 md:flex md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent md:w-auto md:transform-none`}
        >
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="text-white text-lg hover:text-yellow-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg hover:text-yellow-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>

          {/* Login/Logout */}
          {isLoggedIn ? (
            <>
              <li>
                <span className="text-white text-lg">
                  Hello, {userName || 'User'}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogin}
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Confirm Logout Modal */}
      {isModalVisible && (
        <ConfirmLogoutModal
          isVisible={isModalVisible}
          onClose={cancelLogout}
          onConfirm={confirmLogout}
        />
      )}
    </>
  );
};

export default NavBar;
