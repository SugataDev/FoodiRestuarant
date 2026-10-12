import React from 'react';


const CategoryCard = ({
  category,
  title,
  count,
  icon,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-5 sm:p-6 rounded-[22px] bg-white text-center transition-all duration-300 border flex flex-col items-center justify-center focus:outline-none ${
        isActive
          ? 'border-foodiGreen shadow-foodi -translate-y-1.5 ring-2 ring-foodiGreen/20'
          : 'border-gray-100 shadow-foodiCard hover:-translate-y-1 hover:border-foodiGreen/40 hover:shadow-foodi'
      }`}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-[#e7fbe9] flex items-center justify-center text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <strong className="block text-xs sm:text-sm font-bold text-foodiBlack mb-1">
        {title}
      </strong>
      <small className="text-[10px] sm:text-xs text-foodiGray">
        {count}
      </small>
    </button>
  );
};

export default CategoryCard;

