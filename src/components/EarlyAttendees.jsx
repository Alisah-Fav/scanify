import React, { useState } from 'react'
import { LuUserRound } from 'react-icons/lu';

const EarlyAttendees = () => {
 const [attendees, setAttendees] = useState([
    { id: 1, name: 'Angela Asante', time: '9:30am' },
    { id: 2, name: 'Angela Asante', time: '9:30am' },
    { id: 3, name: 'Angela Asante', time: '9:30am' },
    { id: 4, name: 'Angela Asante', time: '9:30am' }
  ]);

    return (
        <div className="bg-[#292929] rounded-lg p-6">
            <h2 className="text-[#C2C2C2] text-xl font-medium mb-4">Early attendees today</h2>

            <div className="space-y-4">
                {attendees.map((attendee) => (
                    <div key={attendee.id} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <div className=" flex items-center justify-center">
                                <LuUserRound size={26} className="text-[#818181]" />
                            </div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-[#C2C2C2]">{attendee.name}</p>
                            <p className="text-xs text-[#818181]">{attendee.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default EarlyAttendees