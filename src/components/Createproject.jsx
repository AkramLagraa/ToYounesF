"use client"
import Link from 'next/link';
import React, { useState } from 'react';


const ProjectCreationForm = () => {
  const [projectType, setProjectType] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectFollowers, setProjectFollowers] = useState([]);
  const [extA, setExtA] = useState('');
  const [extB, setExtB] = useState('');
  const [capacityFo, setCapacityFo] = useState([]);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Creation de projet</h2>
      <form onSubmit={handleSubmit}>
        {/* Type de projet */}
        <div className="mb-4">
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
            Type de projet:
          </label>
          <select
            id="projectType"
            name="projectType"
            onChange={(e) => setProjectType(e.target.value)}
            value={projectType}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            {/* Add your options here */}
            <option value="type1">Maintenance</option>
            <option value="type2">Tran</option>
            <option value="type3">WTA</option>
            <option value="type4">NEUF</option>
            <option value="type5">ATM</option>
            <option value="type6">DGSN</option>
          </select>
        </div>

        {/* Intitule de projet */}
        <div className="mb-4">
          <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">
            Intitule de projet:
          </label>
          <input
            type="text"
            id="projectTitle"
            name="projectTitle"
            onChange={(e) => setProjectTitle(e.target.value)}
            value={projectTitle}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Charge suivie de projet */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Charge suivie de projet:
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="type1"
                checked={projectFollowers.includes('type1')}
                onChange={(e) =>
                  setProjectFollowers((prevFollowers) =>
                    e.target.checked
                      ? [...prevFollowers, e.target.value]
                      : prevFollowers.filter((follower) => follower !== e.target.value)
                  )
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Type1</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="type2"
                checked={projectFollowers.includes('type2')}
                onChange={(e) =>
                  setProjectFollowers((prevFollowers) =>
                    e.target.checked
                      ? [...prevFollowers, e.target.value]
                      : prevFollowers.filter((follower) => follower !== e.target.value)
                  )
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Type2</span>
            </label>
            {/* Add more options as needed */}
          </div>
        </div>

        {/* EXT A */}
        <div className="mb-4">
          <label htmlFor="extA" className="block text-sm font-medium text-gray-700">
            EXT A:
          </label>
          <input
            type="text"
            id="extA"
            name="extA"
            onChange={(e) => setExtA(e.target.value)}
            value={extA}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* EXT B */}
        <div className="mb-4">
          <label htmlFor="extB" className="block text-sm font-medium text-gray-700">
            EXT B:
          </label>
          <input
            type="text"
            id="extB"
            name="extB"
            onChange={(e) => setExtB(e.target.value)}
            value={extB}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Capacite Fo */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Capacite Fo:</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="8 Mb"
                checked={capacityFo.includes('8 Mb')}
                onChange={(e) =>
                  setCapacityFo((prevCapacities) =>
                    e.target.checked
                      ? [...prevCapacities, e.target.value]
                      : prevCapacities.filter((capacity) => capacity !== e.target.value)
                  )
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">8 Mb</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="16 Mb"
                checked={capacityFo.includes('16 Mb')}
                onChange={(e) =>
                  setCapacityFo((prevCapacities) =>
                    e.target.checked
                      ? [...prevCapacities, e.target.value]
                      : prevCapacities.filter((capacity) => capacity !== e.target.value)
                  )
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">16 Mb</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="32 Mb"
                checked={capacityFo.includes('32 Mb')}
                onChange={(e) =>
                  setCapacityFo((prevCapacities) =>
                    e.target.checked
                      ? [...prevCapacities, e.target.value]
                      : prevCapacities.filter((capacity) => capacity !== e.target.value)
                  )
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">32 Mb</span>
            </label>
            {/* Add more options as needed */}
          </div>
        </div>

        {/* File Upload 1 */}
        <div className="mb-4">
          <label htmlFor="file1" className="block text-sm font-medium text-gray-700">
            Upload File 1 (Max Size: 50 MB):
          </label>
          <input
            type="file"
            id="file1"
            name="file1"
            onChange={(e) => setFile1(e.target.files[0])}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            accept=".pdf, .doc, .docx, .xls, .xlsx"
            required
          />
        </div>

        {/* File Upload 2 */}
        <div className="mb-4">
          <label htmlFor="file2" className="block text-sm font-medium text-gray-700">
            Upload File 2 (Max Size: 50 MB):
          </label>
          <input
            type="file"
            id="file2"
            name="file2"
            onChange={(e) => setFile2(e.target.files[0])}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            accept=".pdf, .doc, .docx, .xls, .xlsx"
            required
          />
        </div>

        <div className="flex justify-end">
  <button
    type="submit"
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
  >
    Submit
  </button>
  
</div>


      </form>
    </div>
  );

};

export default ProjectCreationForm;
