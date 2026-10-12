import React from 'react';


const FloatingCard = ({ image, title, subtitle, rating, positionClass = '' }) => {
  return (
    <div
      className={`absolute z-10 flex items-center gap-3 p-2.5 sm:p-3 bg-white rounded-2xl shadow-foodiFloating border border-gray-100/80 transition-transform duration-300 hover:scale-105 ${positionClass}`}
    >
      <img
        src={image}
        alt={title}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
      />
      <div>
        <strong className="block text-[11px] sm:text-xs font-bold text-foodiBlack">
          {title}
        </strong>
        <p className="text-[10px] text-foodiGray font-medium leading-tight">
          {subtitle}
        </p>
        <span className="text-[11px] text-amber-400 tracking-wider">
          {rating}
        </span>
      </div>
    </div>
  );
};

export default FloatingCard;

