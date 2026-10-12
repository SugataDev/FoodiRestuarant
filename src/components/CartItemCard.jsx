import React from 'react';

const CartItemCard = ({ item, onIncreaseQty, onDecreaseQty, onRemove }) => {
  const { id, name, price, image, quantity } = item;

  return (
    <div className="flex items-center gap-3.5 p-3.5 bg-[#fcfdfc] border border-gray-100 rounded-2xl hover:border-foodiGreen/30 hover:bg-white transition-all duration-200">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <h4 className="text-xs sm:text-sm font-semibold text-foodiBlack truncate">
          {name}
        </h4>
        <div className="text-xs font-bold text-foodiGreen-dark mb-1.5">
          ${(price * quantity).toFixed(2)}
          <span className="text-[10px] text-gray-400 font-normal ml-1">
            (${price.toFixed(2)} each)
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDecreaseQty && onDecreaseQty(id)}
            className="w-6 h-6 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-600 hover:bg-foodiGreen hover:text-white hover:border-foodiGreen transition-colors"
            aria-label="Decrease quantity"
          >
            <i className="fa-solid fa-minus" />
          </button>
          <span className="text-xs font-bold w-4 text-center text-foodiBlack">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => onIncreaseQty && onIncreaseQty(id)}
            className="w-6 h-6 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] text-gray-600 hover:bg-foodiGreen hover:text-white hover:border-foodiGreen transition-colors"
            aria-label="Increase quantity"
          >
            <i className="fa-solid fa-plus" />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => onRemove && onRemove(id)}
        className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
        aria-label="Remove item"
      >
        <i className="fa-solid fa-trash-can text-sm" />
      </button>
    </div>
  );
};

export default CartItemCard;

