import React from 'react'
import { BiSolidSchool } from 'react-icons/bi'
import { LuEye, LuPenLine, LuTrash } from 'react-icons/lu'

const AttendanceTable = () => {
  const data = [
    {
      id: 1,
      name: "Joshua Koffie",
      checkIn: "Mar 3, 2025, 8:30pm",
      status: "Early",
    },
  ];

  return (
    <div className="p-4 text-[#818181]">
      {/* Tag */}
      <div className="flex items-center gap-3 bg-[#292929] px-4 py-1 rounded-md text-sm font-semibold text-[#A8671D] mb-4 w-max">
  <div className="bg-[#4F3C26] p-2 rounded-md">
    <BiSolidSchool className="text-[#A8671D]" />
  </div>
  <span>
    <span className="text-white">1</span>   ATTENDANCE
  </span>
</div>


      {/* Table */}
      <div className="bg-[#292929] rounded-lg overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[#818181] uppercase border-b border-black">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Check in time</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={person.id} className="border-b border-[#333] hover:bg-[#2c2c2c]">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{person.name}</td>
                <td className="px-4 py-3">{person.checkIn}</td>
                <td className="px-4 py-3 text-[#10944B]">{person.status}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <LuPenLine size={16} className="cursor-pointer hover:text-blue-400" />
                  <LuEye size={16} className="cursor-pointer hover:text-purple-400" />
                  <LuTrash size={16} className="cursor-pointer hover:text-red-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
