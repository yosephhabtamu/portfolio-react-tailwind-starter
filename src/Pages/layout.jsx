import React from "react";

export default function Layout () {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-3">
      <div className="text-white text-2xl font-bold">
        <a href="#">Logo</a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-white hover:underline">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </li>
        <li>
          <a href="#background" className="text-white hover:underline">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

