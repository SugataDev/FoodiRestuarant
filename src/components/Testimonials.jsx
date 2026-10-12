import React, { useState } from 'react';
import { testimonialsData } from '../data/foodData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="about" className="py-14 sm:py-20 scroll-mt-24">
      <div className="w-[90%] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* Chef Image with Arc Background */}
        <div className="relative flex justify-center items-end min-h-[350px] sm:min-h-[400px]">
          {/* Green Arch */}
          <div className="absolute bottom-0 w-[80%] h-[72%] bg-foodiGreen rounded-t-[100px] rounded-b-3xl" />

          {/* Chef Photo */}
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=650&q=85"
            alt="Professional chef"
            className="relative z-10 w-[85%] max-h-[390px] object-cover object-top rounded-t-[100px] chef-mask"
          />

          {/* Floating Chef Badge */}
          <span className="absolute z-20 right-2 sm:right-6 bottom-4 bg-white shadow-foodi rounded-full px-4 py-2.5 text-xs font-bold text-foodiBlack flex items-center gap-2 border border-gray-50">
            <i className="fa-solid fa-utensils text-foodiGreen" />
            Our Great Chef
          </span>
        </div>

        {/* Testimonial Review Text */}
        <div className="text-left py-4">
          <span className="block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight mb-5">
            What Our Customers
            <br /> Say About Us
          </h2>

          <p className="text-xs sm:text-sm text-foodiGray leading-relaxed mb-7 italic min-h-[64px]">
            "{current.text}"
          </p>

          {/* Customer Avatar & Rating */}
          <div className="flex items-center gap-4 mb-7">
            <div className="flex items-center">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-foodiGreen"
              />
            </div>
            <div>
              <strong className="block text-xs sm:text-sm font-bold text-foodiBlack">
                {current.name}
              </strong>
              <p className="text-[11px] text-foodiGray flex items-center gap-1.5 font-medium">
                <span className="text-amber-400">★★★★★</span>
                <span className="font-bold text-foodiBlack">
                  {current.rating}
                </span>
                <small className="text-gray-400">(1.2k Reviews)</small>
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-transform hover:scale-105"
              aria-label="Previous testimonial"
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white flex items-center justify-center transition-transform hover:scale-105"
              aria-label="Next testimonial"
            >
              <i className="fa-solid fa-chevron-right text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

