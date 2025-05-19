import React, { useState } from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiSolidSchool } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'
import { useNavigate } from 'react-router'


const Signup = () => {
  const navigate = useNavigate();

    
  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate("/login"); 
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-black text-gray-300'>
      <div className='flex flex-col items-center w-full max-w-md p-6 space-y-5'>
        {/* Logo and title */}
        <div className='text-center space-y-2'>
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-gray-300">s</span>
            <span className="text-4xl font-bold text-blue-500">.</span>
          </div>
          <h2 className='text-3xl text-gray-300'>Scanify</h2>
          <p className='text-[#818181]'>
            Enter your details to sign up
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleLogin}>
          <div className='flex flex-col items-center space-y-4 w-full'>
          {/* Name field */}
          <div className='relative'>
            <div className='absolute left-3 inset-y-0 flex items-center text-[#515151]'>
              <GoPerson size={18} />
            </div>
            <input
              type="text"
              name="name"
              className='block w-[317px] h-[51px] bg-[#292929] border border-[#292929] rounded-[6px] py-3 pl-10 pr-3 text-[#515151]'
              placeholder="Name"
              required
            />
          </div>

          {/* Email field */}
          <div className='relative'>
            <div className='absolute left-3 inset-y-0 flex items-center pointer-events-none text-[#515151]'>
              <MdOutlineEmail size={18} />
            </div>
            <input
              type="email"
              name="email"
              className='block w-[317px] h-[51px] bg-[#292929] border border-[#292929] rounded-[6px] py-3 pl-10 pr-3 text-[#515151]'
              placeholder="Email"
              required
            />
          </div>

          {/* Select classes field */}
          <div className='relative'>
            <div className='absolute left-3 inset-y-0 flex items-center pointer-events-none text-[#515151]'>
              < BiSolidSchool size={18} />
            </div>
            <select
              name="classes"
              className='block w-[317px] h-[51px] bg-[#292929] border border-[#292929] rounded-[6px] py-3 pl-10 pr-3 text-[#515151]'
              required
            >
              <option value="" disabled>Select classes</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </div>

          {/* Password field */}
          <div className='relative'>
            <div className='absolute left-3 inset-y-0 flex items-center pointer-events-none text-[#515151]'>
              <AiOutlineUnlock size={18} />
            </div>
            <input
              type="password"
              name="password"
              className='block w-[317px] h-[51px] bg-[#292929] border border-[#292929] rounded-[6px] py-3 pl-10 pr-3 text-[#515151]'
              placeholder="Password"
              required
            />
          </div>

          {/* Signup button */}
          <div className='flex justify-center w-full'>
            <button
              type='submit'
              className='w-[317px] h-[49px] bg-[#2A71DB] hover:bg-blue-700 text-[#1C1C1C] rounded-[11px] font-medium mt-2'>
              Create Account
            </button>
          </div>
        </div>
        </form>

        {/* Login link */}
        <div className='text-center text-sm'>
          <span className='text-[#515151]'>Already have an account?</span>{' '}
          <a href="#" className='text-[#515151] hover:text-blue-500 underline'>Login Now</a>
        </div>
      </div>
    </div>
  )
}

export default Signup