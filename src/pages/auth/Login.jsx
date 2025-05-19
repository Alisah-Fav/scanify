import React from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  
      
    const handleDashboard = (e) => {
      e.preventDefault();
      
      navigate("/dashboard"); 
    };
  return (
    <div className='flex items-center justify-center min-h-screen bg-black text-gray-300'>
      <div className='flex flex-col items-center w-full max-w-md p-6 space-y-6'>
        {/* Logo and title */}
        <div className='text-center space-y-2'>
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-[#D8D8D8]">s</span>
            <span className="text-4xl font-bold text-blue-500">.</span>
          </div>
          <h2 className='text-3xl text-[#D8D8D8]'>Scanify</h2>
          <p className='text-sm text-[#818181]'>
            Enter your credentials to login
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleDashboard}
        className='flex flex-col items-center space-y-6 w-full'>
          {/* Email field */}
          <div className='relative'>
            <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#515151]'>
              <GoPerson size={18} />
            </div>
              <input 
              type="email" 
              name="email"
              className='block w-[317px] h-[51px] bg-[#292929] border border-[#292929] rounded-[6px] py-3 pl-10 pr-3'
              placeholder="Email"
              required
            />
          </div>
          
          {/* Password field */}
          <div className='relative'>
            <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#515151]'>
              <AiOutlineUnlock size={18} />
            </div>
              <input 
              type="password" 
              name="password"
              className='block w-[317px] h-[51px] bg-[#292929] border border-[#292929] rounded-[6px] py-3 pl-10 pr-3 '
              placeholder="Password"
              required
            />
          </div>

          {/* Forgot password */}
          <div className='w-[317px] flex justify-end'>
            <a href="#" className='text-xs text-[#515151] hover:text-blue-500'>Forgot Password?</a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className='w-[317px] h-[49px] bg-[#2A71DB] hover:bg-blue-600 text-[#1C1C1C] rounded-[11px] font-medium'>
            Login
          </button>
        </form>

        {/* Sign up link */}
        <div className='text-center text-sm'>
          <span className='text-[#515151]'>Don't have an account yet?</span>{' '}
          <a href="#" className='text-[#515151] underline'>Create One</a>
        </div>
      </div>
    </div>
  )
} 

export default Login