import React from 'react'
import StatCards from '../components/StatCards'
import EarlyAttendees from '../components/EarlyAttendees'

const Dashboard = () => {
  return (
    <div className='bg-[#1c1c1c] min-h-screen'>
      <div className='p-6 text-white font-medium'>DASHBOARD</div>
      <div className="p-6">
        <StatCards />
      </div>
      <div className='p-6'>
     <EarlyAttendees/>   
      </div>
    </div>
  )
}

export default Dashboard