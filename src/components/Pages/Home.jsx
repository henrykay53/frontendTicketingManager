import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../redux/slice/modalSlice/modalSlice'

import NavBar from '../NavBar';
import { Profile } from 'iconsax-react';
import GoldTicket from "../../assets/images/gold.jpg"
import TicketInfoModal from "../Modal/TicketInfoModal";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();


    const events = [
        {
            name: "Food Fest",
            price: "3000",
            location: "Eko Atlantic",
            person: "3"
        },

        {
            name: "Bella Naija",
            price: "3000",
            location: "Eko Hotel",
            person: "1"
        },

        {
            name: "Eko Trade Fair",
            price: "1000",
            location: "Ajah",
            person: "2"
        },

        {
            name: "Baddo Beach party",
            price: "8500",
            location: "Eko Atlantic",
            person: "4"
        },

        {
            name: "Enugu Marathon",
            price: "9000",
            location: "Eko Atlantic",
            person: "4"
        },

        {
            name: "Dev Fest",
            price: "2740",
            location: "Eko Atlantic",
            person: "1"
        },

        {
            name: "Lagos Fest",
            price: "3000",
            location: "Eko Atlantic",
            person: "4"
        },


    ]

    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <>
            <NavBar searchTerm={searchTerm} searchHandler={searchHandler} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-10">
                {filteredEvents.map((event, index) => (
                    <div
                        key={index}
                        className="w-[90%] p-5 mt-10 rounded-lg  bg-[#f9f9f9] shadow-lg"
                    >
                        <img
                            src={GoldTicket}
                            alt={event.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <p className="pt-2 text-2xl font-semibold">{event.name}</p>
                        <p className="pt-2 text-xl text-gray-500 ">{event.location}</p>
                        <p className="pt-2 text-xl font-bold">₦{event.price}</p>
                        <div className='flex items-center pt-2 -ml-1 '>
                            <Profile />

                            <p className=" font-bold">{event.person}</p>

                        </div>

                        <button 
                        onClick={() => dispatch(openModal())}
                        className="font-bold text-white bg-yellow-400 py-2 px-4 mt-4 rounded-lg hover:bg-yellow-500 transition">
                            View More
                        </button>
                    </div>
                ))}
            </div>

            <TicketInfoModal />

            {/* <TicketInfoModal
                name={name}
                price={price}
                location={location}
                person={person}
            /> */}


        </>

    )
}

export default Home;
