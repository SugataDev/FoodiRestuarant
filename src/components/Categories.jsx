import React from 'react';
import CategoryCard from './CategoryCard';
import { categoriesData } from '../data/foodData';

const Categories = ({ selectedCategory = 'All', onSelectCategory }) => {
  return (
    <section id="categories" className="py-14 sm:py-20 scroll-mt-24">
      <div className="w-[90%] max-w-[1120px] mx-auto text-center">
        {/* Section Heading */}
        <span className="block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase">
          CUSTOMER FAVORITES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight mb-8 sm:mb-10">
          Popular Categories
        </h2>

        {/* Categories Grid mapping reusable CategoryCard with props */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {categoriesData.map((item) => (
            <CategoryCard
              key={item.id}
              category={item.category}
              title={item.title}
              count={item.count}
              icon={item.icon}
              isActive={selectedCategory === item.category}
              onClick={() => onSelectCategory(item.category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

