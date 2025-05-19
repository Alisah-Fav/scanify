import React from "react";
import K from "../constants";
import { NavLink } from "react-router";
import { BiLogOutCircle } from "react-icons/bi";




const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 bg-black h-screen py-4 px-2 gap-y-6 fixed left-0 top-0">
      <h1 className='text-2xl font-bold text-white'>S<span className='text-blue-500'>.</span></h1>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className="text-[#818181] hover:text-[#2A71DB] px-3 py-2 w-full rounded-md flex gap-x-2 items-center"
            >
              
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>

      <button className="mt-auto text-[#A81D1D] flex items-center gap-x-2 ">
        <BiLogOutCircle />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
