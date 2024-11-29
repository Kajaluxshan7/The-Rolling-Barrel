import React from "react";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">The Rolling Barrel</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#menu" className="hover:text-gray-400">
            Menu
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
      </ul>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
