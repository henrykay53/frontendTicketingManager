import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 sm:mx-auto">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => dispatch(closeModal())}
            aria-label="Close Modal"
            className="focus:outline-none"
          >
            <CloseSquare size="32" color="#FF8A65" />
          </button>
        </div>

        {/* Event Image */}
        <div className="my-4">
          <img
            className="rounded-lg w-full h-auto sm:h-64 object-cover"
            src={Party}
            alt={event.name}
          />
        </div>

        {/* Event Information */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
          <p className="text-lg text-gray-600">{event.location}</p>
          <p className="text-xl font-bold text-gray-800">
            ₦{parseInt(event.price).toLocaleString()}
          </p>
        </div>

        {/* Attendee Counter */}
        <div className="flex items-center space-x-4 my-6">
          <button
            onClick={handleDecrease}
            disabled={attendees <= 1}
            aria-label="Decrease Attendees"
            className={`p-2 rounded ${
              attendees > 1
                ? 'hover:bg-gray-100 text-gray-800'
                : 'opacity-50 cursor-not-allowed text-gray-400'
            }`}
          >
            <MinusSquare size="32" color={attendees > 1 ? "#FF8A65" : "#D1D5DB"} />
          </button>

          <p className="flex items-center space-x-2 text-lg text-gray-800">
            <Profile /> 
            <span>
              {attendees} {attendees === 1 ? 'Person' : 'People'}
            </span>
          </p>

          <button
            onClick={handleIncrease}
            aria-label="Increase Attendees"
            className="p-2 rounded hover:bg-gray-100 text-gray-800"
          >
            <AddSquare size="32" color="#FF8A65" />
          </button>
        </div>

        {/* Event Description */}
        <p className="text-lg text-gray-600 leading-relaxed">{event.description}</p>

        {/* Payment Button */}
        <div className="mt-6">
          <button
            className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketInfoModal;
