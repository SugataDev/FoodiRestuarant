import React, { useState } from "react";

const FoodCard = ({
  id,
  name,
  category,
  price,
  rating,
  description,
  image,
  onAddToCart,
  isLiked = false,
  onToggleLike,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, category, price, rating, description, image });
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <article className="group flex-shrink-0 w-[270px] sm:w-[280px] md:w-[310px] bg-white rounded-3xl border border-gray-100 shadow-foodiCard overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-foodi flex flex-col justify-between snap-start">
      {/* Food Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={() => onToggleLike && onToggleLike(id)}
          aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 text-white shadow-md ${
            isLiked
              ? "bg-[#ff5a69] scale-105"
              : "bg-foodiGreen hover:bg-foodiGreen-dark hover:scale-110"
          }`}
        >
          <i
            className={`text-sm ${
              isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }`}
          />
        </button>
      </div>

      {/* Food Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-foodiBlack mb-1 line-clamp-1">
            {name}
          </h3>
          <p className="text-xs text-foodiGray mb-3 line-clamp-1">
            {description}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs mb-3">
            <strong className="text-sm sm:text-base font-extrabold text-foodiBlack">
              ${price.toFixed(2)}
            </strong>
            <span className="flex items-center gap-1 font-semibold text-gray-700">
              <i className="fa-solid fa-star text-amber-400 text-xs" />
              {rating}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm border transition-all duration-200 flex items-center justify-center gap-2 ${
              isAdded
                ? "bg-foodiGreen text-white border-foodiGreen shadow-md"
                : "bg-white text-foodiGreen-dark border-foodiGreen hover:bg-foodiGreen hover:text-white"
            }`}
          >
            {isAdded ? (
              <>
                <i className="fa-solid fa-check text-xs" />
                Added!
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default FoodCard;
