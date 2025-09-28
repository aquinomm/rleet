import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  return (
    // Main modal container (backdrop)
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose} // Close modal if backdrop is clicked
    >
      {/* Modal content area */}
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* The actual content (our form) will be passed in as children */}
        {children}
      </div>
    </div>
  );
}

export default Modal;