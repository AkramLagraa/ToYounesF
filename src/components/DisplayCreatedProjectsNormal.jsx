import React, { useState, useEffect } from 'react';

const DisplayCreatedProjectsNormal = () => {
  const [projectsData, setProjectsData] = useState([
    { id: 1, type: 'Type 1', title: 'Project 1', extA: 'Value A', extB: 'Value B', capacity: 'Capacity 1', extraDocs: 'Doc 1', ChargeSuive: 'test', oc: 3, enterprise: { id: 1, name: 'Enterprise 1', email: 'enterprise1@example.com', phoneNumber: '123456789' }},
    { id: 2, type: 'Type 2', title: 'Project 2', extA: 'Value C', extB: 'Value D', capacity: 'Capacity 2', extraDocs: 'Doc 2', ChargeSuive: 'test', oc: 3, enterprise: { id: 2, name: 'Enterprise 2', email: 'enterprise2@example.com', phoneNumber: '987654321' }},
    // Add more projects with enterprise details
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title'); // Default search type
  const [searchResults, setSearchResults] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSearch = () => {
    
  }

  useEffect(() => {
    // Simulating fetching data from a database
    // You can remove this block if your actual data comes from a database
    // fetch('your_api_endpoint_here')
    //   .then(response => response.json())
    //   .then(data => setProjectsData(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Update searchResults whenever searchTerm or searchType changes
    const filteredProjects = projectsData.filter(project =>
      project[searchType].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProjects);
  }, [searchTerm, searchType, projectsData]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#3498db', fontSize: '28px' }}>Created Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by project details"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #bdc3c7' }}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #bdc3c7' }}
        >
          <option value="id">ID</option>
          <option value="type">Type</option>
          <option value="title">Title</option>
          <option value="extA">EXT A</option>
          <option value="extB">EXT B</option>
          <option value="capacity">Capacite Fo</option>
          <option value="extraDocs">Extra Docs</option>
          <option value="extraDocs">Charge Suivee</option>
          <option value="extraDocs">OC</option>
          <option value="extraDocs">Enterprise</option>
        </select>
        <button style={buttonStyle} onClick={handleSearch}>Search</button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Type De Projet</th>
            <th style={tableHeaderStyle}>Intitule De Projet</th>
            <th style={tableHeaderStyle}>EXT A</th>
            <th style={tableHeaderStyle}>EXT B</th>
            <th style={tableHeaderStyle}>Capacite Fo</th>
            <th style={tableHeaderStyle}>Enterprise Name</th>
            <th style={tableHeaderStyle}>Enterprise Email</th>
            <th style={tableHeaderStyle}>Enterprise Phone Number</th>
            <th style={tableHeaderStyle}>OC</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(project => (
            <tr key={project.id} style={tableRowStyle} onClick={() => openModal(project)}>
              <td style={tableCellStyle}>{project.id}</td>
              <td style={tableCellStyle}>{project.type}</td>
              <td style={tableCellStyle}>{project.title}</td>
              <td style={tableCellStyle}>{project.extA}</td>
              <td style={tableCellStyle}>{project.extB}</td>
              <td style={tableCellStyle}>{project.capacity}</td>
              <td style={tableCellStyle}>{project.enterprise.name}</td>
              <td style={tableCellStyle}>{project.enterprise.email}</td>
              <td style={tableCellStyle}>{project.enterprise.phoneNumber}</td>
              <td style={tableCellStyle}>{project.oc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProject && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="modal p-6 bg-white rounded-lg shadow-md">
            <button className="close-btn absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out" onClick={closeModal}>Close</button>
            <h3 className="text-xl font-bold mb-4">Selected Project Details:</h3>
            <p><span className="font-bold">ID:</span> {selectedProject.id}</p>
            <p><span className="font-bold">Type De Projet:</span> {selectedProject.type}</p>
            <p><span className="font-bold">Intitule De Projet:</span> {selectedProject.title}</p>
            <p><span className="font-bold">EXT A:</span> {selectedProject.extA}</p>
            <p><span className="font-bold">EXT B:</span> {selectedProject.extB}</p>
            <p><span className="font-bold">Capacite Fo:</span> {selectedProject.capacity}</p>
            <p><span className="font-bold">Enterprise Name:</span> {selectedProject.enterprise.name}</p>
            <p><span className="font-bold">Enterprise Email:</span> {selectedProject.enterprise.email}</p>
            <p><span className="font-bold">Enterprise Phone Number:</span> {selectedProject.enterprise.phoneNumber}</p>
            <p><span className="font-bold">OC:</span> {selectedProject.oc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  margin: 'auto',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
};

const tableHeaderStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '15px',
  textAlign: 'left',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
  transition: 'background-color 0.3s',
  cursor: 'pointer', // Add cursor pointer for indicating clickable rows
};

const tableCellStyle = {
  border: '1px solid #ecf0f1',
  padding: '15px',
  textAlign: 'left',
};

const buttonStyle = {
  margin: '0 5px',
  padding: '10px 15px',
  backgroundColor: '#2ecc71',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default DisplayCreatedProjectsNormal;
