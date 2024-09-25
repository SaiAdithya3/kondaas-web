import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full  z-50">
        <div className="w-full flex items-center px-4 py-4 justify-between">
            {/* left */}
            <div className="w-full flex px-10 items-center logo">
                <img src={logo} alt="logo" className="w- h-8" />
            </div>
            <div className="w-full flex text-white gap-2 items-center">
              <a href="#" className=" whitespace-nowrap px-4">About Kondaas</a>
              <a href="#" className="px-4">Residential</a>
              <a href="#" className="px-4">Commercial</a>
              <a href="#" className="px-4">Patnership</a>
              <a href="#" className="px-4">Service</a>
            </div>
            <div className="w-full flex items-center justify-end px-8">
              <button className="bg-[#930000] text-white px-10 py-2 rounded-full">Sign In</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
