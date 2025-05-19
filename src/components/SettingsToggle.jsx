import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'

const SettingsToggle = () => {
      const [active, setActive] = useState(false)
  return (
  <div className="p-4 text-gray-200">
      {/* Tag */}
      <div className="flex items-center gap-3 bg-[#292929] px-4 py-1 rounded-md text-sm font-semibold text-[#A8671D] w-max mb-4">
        <div className="bg-[#4F3C26] p-2 rounded-md">
          <FiSettings className="text-[#A8671D]" />
        </div>
        <span>SETTINGS</span>
      </div>

      {/* Toggle Box */}
      <div className="bg-[#292929] rounded-lg p-5 flex justify-between items-center w-full h-40">
        <div>
          <h3 className="font-semibold text-[#818181]">Activate Attendance</h3>
          <p className="text-sm text-[#818181]">{active ? 'Activated' : 'Deactivated'}</p>
        </div>

        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={active}
            onChange={() => setActive(!active)}
          />
          <div className="w-11 h-6 bg-[#242424] peer-focus:outline-none rounded-full peer peer-checked:bg-[#A8671D] transition-all"></div>
          <div className="absolute left-0.5 top-0.5 bg-[#A8671D] h-5 w-5 rounded-full transition-transform transform peer-checked:translate-x-5" />
        </label>
      </div>
    </div>
  )
}

export default SettingsToggle