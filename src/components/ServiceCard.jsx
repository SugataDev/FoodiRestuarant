import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-foodiCard text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-foodiGreen/40 hover:shadow-foodi flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-foodiGreen-light/60 flex items-center justify-center text-foodiGreen text-2xl mb-3.5">
        <i className={icon} />
      </div>
      <h3 className="text-sm font-bold text-foodiGreen-dark mb-1.5">
        {title}
      </h3>
      <p className="text-xs text-foodiGray leading-relaxed max-w-[200px]">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;

