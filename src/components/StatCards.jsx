import React from 'react'
import { BiSolidSchool } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { LuUserRound } from 'react-icons/lu';

const StatCards = () => {
    const stats = [
  {
    label: 'Students',
    value: 20,
    icon: <LuUserRound className="w-5 h-45 text-[#2A71DB]" />,
    iconBgColor: 'bg-[#2a3f5f]',
    textColor: 'text-[#69A5FF]',
  },
  {
    label: 'Classes',
    value: 7,
    icon: <BiSolidSchool className="w-5 h-5 text-[#A8671D]" />,
    iconBgColor: 'bg-[#4F3C26]',
    textColor: 'text-[#A8671D]',
  },
  {
    label: 'Marked today',
    value: 10,
    icon: <BsCheckCircle className="w-5 h-5 text-[#10944B]" />,
    iconBgColor: 'bg-[#224934]',
     textColor: 'text-[#10944B]',
  },
];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center bg-[#292929] text-white rounded-lg p-4 w-70 h-30 shadow"
        > 
          {/* Updated icon container with background */}
          <div className="mr-4">
            <div className={`${stat.iconBgColor} w-15 h-15 rounded-md flex items-center justify-center`}>
              {stat.icon}
            </div>
          </div>
          {/* Keeping your original label and value structure */}
          <div>
            <div className={`${stat.textColor}`}>{stat.label}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatCards