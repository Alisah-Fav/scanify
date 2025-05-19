import React from 'react';
// Import the image
import scannerImage from '../assets/images/img1.jpg';
import { useNavigate } from 'react-router';

const Hero = () => {
    const navigate = useNavigate();

    
  const handleHero = (e) => {
    e.preventDefault();
    
    navigate("/signup"); 
  };
  return (
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-4'>
      {/* Image (hidden on mobile) */}
      <div className='hidden md:block w-[330px] h-[330px]'>
        <img
          src={scannerImage}
          alt='QR code scanner'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Text and button */}
      <div className='w-64 md:ml-24 text-center'>
        <h1 className='text-2xl font-bold'>S<span className='text-blue-500'>.</span></h1>
        <h2 className='text-2xl font-bold mb-2'>Scanify</h2>
        <p className='text-gray-400 text-sm mb-6'>
          Just take your phone, scan the code, 
          and enter. Its that simple!
        </p>
        <button 
        onClick={handleHero}
        className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;