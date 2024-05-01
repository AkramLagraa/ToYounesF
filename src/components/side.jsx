import React from 'react'

const side = () => {
  return (
 
      <div className="sidebar bg-gray-200 p-4">
  <h3 className="text-lg font-semibold mb-4">Departments</h3>
  <ul>
    <li>
      <button onClick={() => handleDepartmentSelect('Fibre Optique')} className="block w-full py-2 px-4 text-left bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-300 ease-in-out">
        Fibre Optique Department
      </button>
    </li>
    <li>
      <button onClick={() => handleDepartmentSelect('Equipement Transport')} className="block w-full py-2 px-4 text-left bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-300 ease-in-out mt-2">
        Equipement Transport Department
      </button>
    </li>
  </ul>
</div>

  )
}

export default side
