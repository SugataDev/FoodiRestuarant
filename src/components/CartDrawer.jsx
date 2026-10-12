import React from 'react';
import CartItemCard from './CartItemCard';

const CartDrawer = ({
  isOpen = false,
  onClose,
  cart = [],
  onIncreaseQty,
  onDecreaseQty,
  onRemove,
  onProceedCheckout,
}) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? (subtotal >= 50 ? 0 : 2.0) : 0;
  const grandTotal = subtotal + deliveryFee;
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop Blur Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/45 backdrop-blur-[3px] z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping Cart Drawer"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-bag-shopping text-foodiGreen text-xl" />
            <h2 className="text-base sm:text-lg font-bold text-foodiBlack">
              Your Cart ({totalItemCount})
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-foodiBlack flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* Cart Body - List of Reusable CartItemCards */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3.5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-20 h-20 rounded-full bg-foodiGreen-light flex items-center justify-center text-foodiGreen text-3xl mb-4">
                <i className="fa-solid fa-basket-shopping" />
              </div>
              <h3 className="text-base font-bold text-foodiBlack mb-1">
                Your Cart is Empty
              </h3>
              <p className="text-xs text-foodiGray max-w-[220px] mb-6">
                Looks like you haven't added any dishes yet. Start exploring our delicious meals!
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs font-semibold shadow-md transition-all"
              >
                Explore Dishes
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onIncreaseQty={onIncreaseQty}
                onDecreaseQty={onDecreaseQty}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-gray-100 bg-white">
            <div className="space-y-2 text-xs sm:text-sm text-foodiGray mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <strong className="text-foodiBlack">
                  ${subtotal.toFixed(2)}
                </strong>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <strong className="text-foodiBlack">
                  {subtotal >= 50 ? (
                    <span className="text-foodiGreen-dark font-bold">FREE</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </strong>
              </div>
              <div className="h-[1px] bg-gray-100 my-2" />
              <div className="flex justify-between text-sm sm:text-base font-bold text-foodiBlack">
                <span>Total Amount</span>
                <span className="text-foodiGreen-dark">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onProceedCheckout}
              className="w-full py-3.5 px-6 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white font-bold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;

