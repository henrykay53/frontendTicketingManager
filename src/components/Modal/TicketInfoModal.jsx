import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/slice/modalSlice/modalSlice';

const TicketInfoModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);
  
    if (!isOpen) return null; // Don't render the modal if it's closed
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Modal Window</h2>
          <p>This is a simple modal using Redux for state management.</p>
          <button onClick={() => dispatch(closeModal())}>Close Modal</button>
        </div>
      </div>
    );
  };
  
  export default TicketInfoModal;




