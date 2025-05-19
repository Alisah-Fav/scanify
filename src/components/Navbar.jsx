import React from 'react'
import { LuUserRound } from 'react-icons/lu';

const Navbar = ({user}) => {
  return (

    <div className="w-full bg-black text-[#FFFFFF] flex justify-end items-center h-12 px-4">
      <span className="mr-2">Hi {user?.firstName || 'User'}!</span>
      <LuUserRound className="w-5 h-5" />
    </div>
  );
}

export default Navbar