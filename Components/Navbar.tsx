import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="text-xl font-semibold">YourBrand</div>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#about" className="hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
