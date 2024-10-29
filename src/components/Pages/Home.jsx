import React, { useState } from 'react';
import NavBar from "../NavBar";
import SideNav from "../SideNav";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slice/modalSlice/modalSlice';

import GoldTicket from '../../assets/images/gold.jpg';
import TicketInfoModal from '../Modal/TicketInfoModal';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const isSideNavOpen = useSelector((state) => state.sideNav.isOpen); // Assuming you manage SideNav state in Redux

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
    setSelectedEvent(event);
    dispatch(openModal());
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);

  return (
    <>
      <NavBar />
      <SideNav searchTerm={searchTerm} searchHandler={searchHandler} />

      <div className={`p-10 transition-all duration-300 ${isSideNavOpen ? 'ml-72' : ''}`}>
        {filteredEvents.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            No events found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredEvents.map((event, index) => (
              <div
                key={`${event.name}-${index}`}
                className="w-full p-5 rounded-lg bg-white shadow-md transition-transform hover:scale-105"
              >
                <img
                  src={GoldTicket}
                  alt={event.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <p className="text-2xl font-semibold">{event.name}</p>
                  <p className="text-xl text-gray-600">{event.location}</p>
                  <p className="text-lg font-bold mt-2">{formatPrice(event.price)}</p>

                  <button
                    onClick={() => handleViewMore(event)}
                    className="w-full mt-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && <TicketInfoModal event={selectedEvent} />}
    </>
  );
};

export default Home;
