import React from 'react'
import { BiSolidSchool } from 'react-icons/bi';
import { LuEye, LuPenLine, LuTrash } from 'react-icons/lu';

const ClassTable = () => {
  const classData = [
    { id: 1, name: 'Maths', capacity: 100, students: 100 },
    { id: 2, name: 'English', capacity: 120, students: 120 },
    { id: 3, name: 'History', capacity: 50, students: 50 },
    { id: 4, name: 'Science', capacity: 80, students: 80 },
  ];

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">

        <div className="flex items-center gap-3 bg-[#292929] px-4 py-1 rounded-md text-sm font-semibold text-[#A8671D]">
          <div className="bg-[#4F3C26] p-2 rounded-md">
            <BiSolidSchool className="text-[#A8671D]" />
          </div>
          <span>
            <span className="text-white">7</span> CLASSES
          </span>
        </div>
        <button className="bg-[#A8671D] hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded">
          + Add Class
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#292929] rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#292929] text-[#818181] uppercase">
            <tr className="border-b border-black">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Capacity</th>
              <th className="px-4 py-3">No. Students</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[#818181] items-center">
            {classData.map((cls, index) => (
              <tr key={cls.id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{cls.name}</td>
                <td className="px-4 py-2">{cls.capacity}</td>
                <td className="px-4 py-2">{cls.students}</td>
                <td className="px-4 py-2 flex space-x-3">
                  <button><LuPenLine size={16} /></button>
                  <button><LuEye size={16} /></button>
                  <button><LuTrash size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Footer Pagination */}
        <div className="flex justify-end items-center px-4 md:px-10 lg:px-40 py-3 text-sm text-[#818181] bg-[#292929]">
          <div className="flex items-center gap-10">
            <span>Showing 4 / 7</span>
            <div className="flex gap-6">
              <button className="hover:underline">PREVIOUS</button>
              <button className="hover:underline">NEXT</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ClassTable