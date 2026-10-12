import React from 'react';

const SuccessModal = ({ isOpen = false, onClose, orderDetails = {} }) => {
  if (!isOpen) return null;

  const {
    orderId = '#FD-82910',
    name = 'Customer',
    paymentMethod = 'Cash on Delivery',
    grandTotal = 0,
    estimatedTime = '25 - 35 Minutes',
  } = orderDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-[4px]">
      <div className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-8 text-center shadow-2xl animate-scaleUp">
        {/* Animated Checkmark Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-foodiGreen-light text-foodiGreen text-4xl sm:text-5xl flex items-center justify-center mx-auto mb-5 animate-success-pop shadow-sm">
          <i className="fa-solid fa-circle-check" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foodiBlack mb-2">
          Order Placed Successfully!
        </h2>

        <p className="text-xs sm:text-sm text-foodiGray leading-relaxed mb-6">
          Thank you, <strong className="text-foodiBlack">{name}</strong>! Your
          delicious order has been received and our chefs have started preparing it.
        </p>

        {/* Order Receipt Box */}
        <div className="bg-[#f9fbf9] border border-dashed border-foodiGreen/40 rounded-2xl p-4 sm:p-5 text-left mb-6 space-y-2 text-xs">
          <div className="flex justify-between items-center text-gray-600">
            <span>Order Number:</span>
            <strong className="text-foodiBlack">{orderId}</strong>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Estimated Delivery:</span>
            <strong className="text-foodiBlack">{estimatedTime}</strong>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Payment Method:</span>
            <strong className="text-foodiBlack">{paymentMethod}</strong>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200/60 pt-2 text-sm font-bold text-foodiBlack">
            <span>Total Amount:</span>
            <span className="text-foodiGreen-dark">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Done Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white font-bold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all"
        >
          Done & Explore More Food
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;

