import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/slice/modalSlice/modalSlice';
import { Profile, CloseSquare, AddSquare, MinusSquare } from 'iconsax-react';
import Party from '../../assets/images/party.jpg';

const TicketInfoModal = ({ event }) => {
  const dispatch = useDispatch();
  const [attendees, setAttendees] = useState(parseInt(event?.person, 10) || 1);

  if (!event) return null;

  const handleIncrease = () => setAttendees((prev) => prev + 1);
  const handleDecrease = () => {
    if (attendees > 1) setAttendees((prev) => prev - 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => dispatch(closeModal())} aria-label="Close Modal">
            <CloseSquare size="32" color="#FF8A65" />
          </button>
        </div>

        {/* Event Image */}
        <div className="my-4">
          <img className="rounded-lg w-full h-48 object-cover" src={Party} alt="Party event" />
        </div>

        {/* Event Information */}
        <h2 className="text-2xl font-bold">{event.name}</h2>
        <p className="text-lg text-gray-500">{event.location}</p>
        <p className="text-xl font-bold mt-2">₦{parseInt(event.price).toLocaleString()}</p>

        {/* Attendee Counter */}
        <div className="flex items-center space-x-4 my-4">
          <button
            onClick={handleDecrease}
            disabled={attendees <= 1}
            aria-label="Decrease Attendees"
            className={`p-1 rounded ${attendees > 1 ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed'}`}
          >
            <MinusSquare size="32" color="#FF8A65" />
          </button>

          <p className="flex items-center space-x-2 text-lg">
            <Profile /> 
            <span>
              {attendees} {attendees === 1 ? 'Person' : 'People'}
            </span>
          </p>

          <button
            onClick={handleIncrease}
            aria-label="Increase Attendees"
            className="p-1 rounded hover:bg-gray-200"
          >
            <AddSquare size="32" color="#FF8A65" />
          </button>
        </div>

        {/* Event Description */}
        <p className="text-lg leading-relaxed my-2">{event.description}</p>

        {/* Payment Button */}
        <div className="flex justify-center mt-6">
          <button
            className="w-full py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketInfoModal;
