import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/slice/modalSlice/modalSlice';

const TicketInfoModal = ({event}) => {
    // const isOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();

    if (!event) return null; 
  
  
    // if (!isOpen) return null; // Don't render the modal if it's closed
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-yellow-300 rounded-lg shadow-2xl p-10 max-w-md w-full">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
            <p className="text-xl text-gray-500">{event.location}</p>
            <p className="text-xl font-bold">₦{event.price}</p>
            <p className="text-lg">Number of Attendees: {event.person}</p>
          <button
            onClick={() => dispatch(closeModal())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Close Modal
          </button>
        </div>
      </div>
    );
  };
  
  export default TicketInfoModal;




