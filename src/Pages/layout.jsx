import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout () {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 p-3">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-white hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

