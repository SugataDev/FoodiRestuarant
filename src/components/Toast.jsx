import React from 'react';

const Toast = ({ message = '', visible = false }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 bg-foodiBlack text-white px-5 py-3 rounded-full text-xs sm:text-sm font-medium shadow-2xl flex items-center gap-2.5 transition-all duration-300 pointer-events-none ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;

