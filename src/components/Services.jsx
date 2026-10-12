import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/foodData';

const Services = () => {
  return (
    <section id="services" className="py-14 sm:py-20 scroll-mt-24">
      <div className="w-[90%] max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* Left Content Column */}
        <div className="text-left py-4">
          <span className="block text-[11px] font-extrabold tracking-widest text-[#ff6666] mb-2 uppercase">
            OUR STORY & SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foodiBlack tracking-tight mb-5">
            Our Culinary Journey
            <br /> And Services
          </h2>

          <p className="text-xs sm:text-sm text-foodiGray leading-relaxed max-w-[440px] mb-7">
            Rooted in passion, we blend unforgettable dining experiences and
            offer exceptional services, bringing culinary artistry with every
            memorable moment.
          </p>

          <a
            href="#menu"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs sm:text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore
          </a>
        </div>

        {/* Right Services Grid mapping reusable ServiceCard with props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

