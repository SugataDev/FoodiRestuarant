import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-16 pb-8 bg-white">
      <div className="w-[90%] max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-100">
          {/* Brand Info */}
          <div>
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-foodiBlack flex items-center gap-2 mb-4"
            >
              <i className="fa-solid fa-utensils text-foodiGreen text-base" />
              <span>
                FOOD<span className="text-foodiGreen">I</span>
              </span>
            </a>
            <p className="text-xs text-foodiGray leading-relaxed max-w-[240px] mb-5">
              Savor the artistry where every dish is a culinary masterpiece.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: 'fa-facebook-f', label: 'Facebook' },
                { icon: 'fa-instagram', label: 'Instagram' },
                { icon: 'fa-x-twitter', label: 'Twitter' },
                { icon: 'fa-youtube', label: 'YouTube' },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-600 hover:bg-foodiGreen hover:text-white hover:border-foodiGreen transition-all duration-200"
                >
                  <i className={`fa-brands ${item.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-bold text-foodiBlack mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-xs text-foodiGray">
              <li>
                <a href="#about" className="hover:text-foodiGreen transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foodiGreen transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-foodiGreen transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foodiGreen transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-sm font-bold text-foodiBlack mb-4">
              Main Menu
            </h3>
            <ul className="space-y-2.5 text-xs text-foodiGray">
              <li>
                <a href="#home" className="hover:text-foodiGreen transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-foodiGreen transition-colors">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-foodiGreen transition-colors">
                  All Menus
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foodiGreen transition-colors">
                  Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-foodiBlack mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs text-foodiGray">
              <li>
                <a
                  href="mailto:hello@foodi.com"
                  className="hover:text-foodiGreen transition-colors"
                >
                  hello@foodi.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-foodiGreen transition-colors"
                >
                  +880 1234 567890
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
              <li>Mon - Sun: 9:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foodiGray">
          <p>© {new Date().getFullYear()} Foodi. All rights reserved.</p>
          <a
            href="#home"
            className="text-foodiGreen-dark hover:underline font-semibold"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

