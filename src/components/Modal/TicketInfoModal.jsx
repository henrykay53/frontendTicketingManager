import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/slice/modalSlice/modalSlice';
import { Profile, CloseSquare, AddSquare, MinusSquare } from 'iconsax-react';
import Party from "../../assets/images/party.jpg";

const TicketInfoModal = ({ event }) => {
  // const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const [attendees, setAttendees] = useState(parseInt(event.person, 10) || 1);

  const handleIncrease = () => setAttendees(attendees + 1);
  const handleDecrease = () => {
    if (attendees > 1) setAttendees(attendees - 1);
  };

  if (!event) return null;


  // if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-yellow-300 rounded-lg shadow-2xl p-5 max-w-md w-full">
        <div className="flex justify-end pb-2"><CloseSquare onClick={() => dispatch(closeModal())} size="32" color="#FF8A65" /></div>
        <div>
          <img className='rounded-sm' src={Party} alt="Party flairs" />
        </div>

        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="text-xl text-gray-500">{event.location}</p>
        <p className="text-xl font-bold">₦{event.price}</p>
        {/* <p className="text-lg flex items-center pt-2 -ml-1">  <Profile /> {event.person}</p> */}

        <div className="flex items-center space-x-2 pt-4">
       
            <MinusSquare onClick={handleDecrease} size="32" color="#FF8A65"/>
          
          <p className="text-lg flex items-center">
            <Profile className="mr-2" /> {attendees} {attendees === 1 ? "Person" : "People"}
          </p>
       
            <AddSquare   onClick={handleIncrease} size="32" color="#FF8A65"/>
          
        </div>

        <p className='font-bold py-2 text-xl leading-8'>{event.description}</p>

        <div className='flex justify-center py-4'>
        <button
          className="font-bold bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Proceed to payment
        </button>

        </div>
       
      </div>
    </div>
  );
};

export default TicketInfoModal;




