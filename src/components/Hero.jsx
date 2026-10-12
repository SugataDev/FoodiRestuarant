import React from 'react';
import FloatingCard from './FloatingCard';
import { heroFloatingCards } from '../data/foodData';

const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-14 sm:py-16 scroll-mt-24">
      <div className="w-[90%] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
        {/* Left Content Column */}
        <div className="text-left py-4">
          <span className="block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-3 uppercase">
            WELCOME TO FOODI
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.18] text-foodiBlack tracking-tight mb-5">
            Dive into Delights
            <br />
            Of Delectable <span className="text-foodiGreen">Food</span>
          </h1>

          <p className="text-xs sm:text-sm text-foodiGray leading-relaxed max-w-[420px] mb-7">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-5 sm:gap-6 mb-8">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs sm:text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Order Now
            </a>

            <a
              href="#about"
              className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foodiBlack hover:text-foodiGreen transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-white shadow-foodi flex items-center justify-center text-foodiGreen group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-play text-xs text-foodiGreen-dark" />
              </span>
              Watch Video
            </a>
          </div>

          {/* Customer Reviews Snippet */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center">
              <img
                src="https://i.pravatar.cc/60?img=12"
                alt="Customer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/60?img=47"
                alt="Customer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2"
              />
              <img
                src="https://i.pravatar.cc/60?img=32"
                alt="Customer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2"
              />
            </div>
            <div>
              <strong className="block text-xs font-bold text-foodiBlack">
                Our Happy Customers
              </strong>
              <p className="text-[11px] text-foodiGray flex items-center gap-1 font-medium">
                <i className="fa-solid fa-star text-amber-400 text-xs" />
                4.9 (1.2k Reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Right Hero Image Column with Reusable Floating Cards */}
        <div className="relative flex justify-center items-center min-h-[350px] sm:min-h-[420px]">
          {/* Green Background Circle */}
          <div className="absolute w-[76%] sm:w-[350px] aspect-square rounded-full bg-foodiGreen top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]" />

          {/* Main Hero Food Plate Image */}
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
            alt="Fresh and delicious food"
            className="relative z-10 w-[84%] max-h-[380px] object-contain rounded-[45%] hero-food-mask"
          />

          {/* Reusable Floating Cards using Props */}
          {heroFloatingCards.map((card) => (
            <FloatingCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              rating={card.rating}
              image={card.image}
              positionClass={card.positionClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

