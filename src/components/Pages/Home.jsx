import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../NavBar";
import SideNav from "../SideNav";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slice/modalSlice/modalSlice';
import { ToastContainer, toast } from 'react-toastify';

import GoldTicket from '../../assets/images/gold.jpg';
import TicketInfoModal from '../Modal/TicketInfoModal';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const isSideNavOpen = useSelector((state) => state.sideNav.isOpen); // Assuming you manage SideNav state in Redux
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const events = [
    {
      name: 'Food Fest',
      price: '3000',
      location: 'Eko Atlantic',
      person: '3',
      description:
        'A celebration of culinary delights featuring local and international cuisines, with live cooking demos and food vendors.',
    },
    {
      name: 'Bella Naija',
      price: '3000',
      location: 'Eko Hotel',
      person: '1',
      description:
        'A glamorous lifestyle event by Bella Naija with networking opportunities, fashion shows, and live entertainment.',
    },
    {
      name: 'Eko Trade Fair',
      price: '1000',
      location: 'Ajah',
      person: '2',
      description:
        'A bustling trade fair showcasing products and services from various industries, with business networking and entertainment.',
    },
    {
      name: 'Baddo Beach Party',
      price: '8500',
      location: 'Eko Atlantic',
      person: '4',
      description:
        'An exciting beach party with live DJs, bonfires, and games. Enjoy an unforgettable night of music and fun by the ocean.',
    },
    {
      name: 'Enugu Marathon',
      price: '9000',
      location: 'Eko Atlantic',
      person: '4',
      description:
        'A marathon event attracting runners and fitness enthusiasts from all over, with a scenic route and rewarding finish line experience.',
    },
    {
      name: 'Dev Fest',
      price: '2740',
      location: 'Eko Atlantic',
      person: '1',
      description:
        'A technology conference for developers, featuring workshops, tech talks, and networking opportunities with industry professionals.',
    },
    {
      name: 'Lagos Fest',
      price: '3000',
      location: 'Eko Atlantic',
      person: '4',
      description:
        'A vibrant cultural festival celebrating Lagos, with music performances, art exhibitions, and street food from around the city.',
    },
  ];

  const searchHandler = (e) => setSearchTerm(e.target.value);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMore = (event) => {
    const token = localStorage.getItem('token');

    if (token) {
      setSelectedEvent(event);
      dispatch(openModal());
    } else {
      toast.error('You need to log in to view ticket details.');
      navigate('/login');
    }
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <SideNav searchTerm={searchTerm} searchHandler={searchHandler} />

      <div
        className={`p-5 sm:p-8 lg:p-10 transition-all duration-300 ${
          isSideNavOpen ? 'lg:ml-72' : ''
        }`}
      >
        {filteredEvents.length === 0 ? (
          <p className="text-center text-lg md:text-xl text-gray-500">
            No events found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={`${event.name}-${index}`}
                className="flex flex-col justify-between w-full p-4 rounded-lg bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={GoldTicket}
                  alt={event.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4 flex-grow">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">{event.name}</h2>
                  <p className="text-sm md:text-base text-gray-600">{event.location}</p>
                  <p className="text-md md:text-lg font-bold text-yellow-600 mt-2">
                    {formatPrice(event.price)}
                  </p>
                </div>
                <button
                  onClick={() => handleViewMore(event)}
                  className="w-full mt-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && <TicketInfoModal event={selectedEvent} />}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default Home;
