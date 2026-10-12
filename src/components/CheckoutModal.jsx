import React, { useState } from 'react';

const CheckoutModal = ({
  isOpen = false,
  onClose,
  onBackToCart,
  cart = [],
  onConfirmOrder,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    paymentMethod: 'Cash on Delivery',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? (subtotal >= 50 ? 0 : 2.0) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all required delivery details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onConfirmOrder({
        ...formData,
        subtotal,
        deliveryFee,
        grandTotal,
        items: [...cart],
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-[4px] animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-foodiBlack flex items-center gap-2.5">
            <i className="fa-solid fa-receipt text-foodiGreen text-lg" />
            Order Checkout
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-foodiBlack flex items-center justify-center transition-colors"
            aria-label="Close checkout"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column: Delivery Details (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-foodiBlack flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-foodiGreen" />
                Delivery Details
              </h3>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +880 1712 345678"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House, Road, Area, City"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Delivery Notes (Optional)
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Please ring doorbell or call upon arrival"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-foodiBlack focus:outline-none focus:border-foodiGreen focus:ring-2 focus:ring-foodiGreen/20 transition-all"
                />
              </div>
            </div>

            {/* Right Column: Payment & Recap (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-foodiBlack flex items-center gap-2">
                <i className="fa-solid fa-credit-card text-foodiGreen" />
                Payment Method
              </h3>

              {/* Payment Radio Options */}
              <div className="space-y-2">
                {[
                  {
                    value: 'Cash on Delivery',
                    label: 'Cash on Delivery',
                    desc: 'Pay cash when food arrives',
                    icon: 'fa-money-bill-wave',
                  },
                  {
                    value: 'Credit / Debit Card',
                    label: 'Credit / Debit Card',
                    desc: 'Visa, MasterCard, Amex',
                    icon: 'fa-credit-card',
                  },
                  {
                    value: 'Mobile Banking',
                    label: 'Mobile Banking',
                    desc: 'bKash, Nagad, Rocket',
                    icon: 'fa-mobile-screen-button',
                  },
                ].map((method) => (
                  <label
                    key={method.value}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      formData.paymentMethod === method.value
                        ? 'border-foodiGreen bg-[#f6fcf7] ring-1 ring-foodiGreen/20'
                        : 'border-gray-200 hover:border-foodiGreen/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={formData.paymentMethod === method.value}
                      onChange={handleChange}
                      className="accent-foodiGreen"
                    />
                    <div className="flex-1 flex items-center gap-2.5">
                      <i
                        className={`fa-solid ${method.icon} text-foodiGreen text-sm`}
                      />
                      <div>
                        <strong className="block text-[11px] font-bold text-foodiBlack">
                          {method.label}
                        </strong>
                        <span className="text-[10px] text-foodiGray">
                          {method.desc}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Order Recap Box */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="text-xs font-bold text-foodiBlack mb-2.5">
                  Order Summary
                </h4>
                <div className="max-h-24 overflow-y-auto space-y-1.5 mb-2.5 pr-1 text-[11px] text-gray-600">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <span className="truncate max-w-[130px]">
                        {item.name} × {item.quantity}
                      </span>
                      <strong className="font-semibold text-foodiBlack">
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200/60 pt-2 space-y-1 text-xs">
                  <div className="flex justify-between text-foodiGray">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foodiGray">
                    <span>Delivery:</span>
                    <span>
                      {subtotal >= 50 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-foodiBlack pt-1 border-t border-gray-200/60 text-sm">
                    <span>Total to Pay:</span>
                    <span className="text-foodiGreen-dark">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onBackToCart}
              className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 text-xs font-semibold transition-colors"
            >
              Back to Cart
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin text-xs" />
                  Processing...
                </>
              ) : (
                `Confirm & Place Order ($${grandTotal.toFixed(2)})`
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;

