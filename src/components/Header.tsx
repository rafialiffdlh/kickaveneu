import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img
            src="https://www.kickavenue.com/static/media/black-logo.6a064f19.svg"
            alt="Kick Avenue"
            className="h-8 mr-4"
          />
          <input
            type="text"
            placeholder="Type any products here"
            className="border rounded-full py-2 px-4 w-64"
          />
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 ">
            <li>
              <a href="">K-Brands</a>
            </li>
            <li>
              <a href="">Sneakers</a>
            </li>
            <li>
              <a href="">Apparel</a>
            </li>
            <li>
              <a href="">Luxury</a>
            </li>
            <li>
              <a href="">Electronics & Collectibles</a>
            </li>
          </ul>
          <div className="ml-6">
            <a href="">Login</a>
            <a href="">Register</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
