import React, { useRef } from 'react';
import FoodCard from './FoodCard';

const FoodMenu = ({
  dishes = [],
  selectedCategory = 'All',
  searchTerm = '',
  onAddToCart,
  favorites = [],
  onToggleLike,
}) => {
  const scrollContainerRef = useRef(null);

  // Filter dishes based on category & search term
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      dish.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Carousel Next/Prev scrolling
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="py-14 sm:py-20 scroll-mt-24">
      <div className="w-[90%] max-w-[1120px] mx-auto">
        {/* Section Heading & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <span className="block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase">
              SPECIAL DISHES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight">
              Standout Dishes
              <br className="hidden sm:inline" /> From Our Menu
            </h2>
          </div>

          {/* Carousel Left / Right Chevrons */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-transform hover:scale-105"
              aria-label="Previous dishes"
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white flex items-center justify-center transition-transform hover:scale-105"
              aria-label="Next dishes"
            >
              <i className="fa-solid fa-chevron-right text-xs" />
            </button>
          </div>
        </div>

        {/* Carousel / Grid of Reusable FoodCards */}
        {filteredDishes.length > 0 ? (
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-1"
          >
            {filteredDishes.map((dish) => (
              <FoodCard
                key={dish.id}
                id={dish.id}
                name={dish.name}
                category={dish.category}
                price={dish.price}
                rating={dish.rating}
                description={dish.description}
                image={dish.image}
                onAddToCart={onAddToCart}
                isLiked={favorites.includes(dish.id)}
                onToggleLike={onToggleLike}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-gray-50/70 rounded-3xl border border-dashed border-gray-200">
            <i className="fa-solid fa-utensils text-gray-300 text-3xl mb-3" />
            <h3 className="text-base font-bold text-foodiBlack mb-1">
              No Dishes Found
            </h3>
            <p className="text-xs text-foodiGray">
              {searchTerm
                ? `No dishes matching "${searchTerm}" in ${selectedCategory}.`
                : `No dishes available in ${selectedCategory} right now.`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodMenu;

