import React from 'react';

const ConfirmLogoutModal = ({ isVisible, onClose, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Are you sure you want to log out?
        </h3>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          >
            Yes, I'm sure...
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;
