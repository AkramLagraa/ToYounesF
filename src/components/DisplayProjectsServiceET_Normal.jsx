import React, { useState, useEffect } from 'react';
import DisplayCreatedProjects_chef from './DisplayProjectsServiceET_chef';

const DisplayCreatedProjectsServiceET_Normal = () => {

  const [projectsData, setProjectsData] = useState([
    // Your previous project data here
    { id: 1, type: 'Type 1', title: 'Project 1', extA: 'Value A', extB: 'Value B', EA: 'EA 1', NumDa: 1, Metro: 'test', Num: 123, Status: 'Completed', ipClient: 'Client 1', enterprise: { id: 1, name: 'Enterprise 1', email: 'enterprise1@example.com', phoneNumber: '1234567890' } },
    { id: 2, type: 'Type 2', title: 'Project 2', extA: 'Value C', extB: 'Value D', EA: 'EA 2', NumDa: 2, Metro: 'test2', Num: 456, Status: 'In Progress', ipClient: 'Client 2', enterprise: { id: 2, name: 'Enterprise 2', email: 'enterprise2@example.com', phoneNumber: '9876543210' } },
    // Add more projects as needed
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [searchResults, setSearchResults] = useState(projectsData);

  useEffect(() => {
    const filteredProjects = projectsData.filter(project =>
      project[searchType].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProjects);
  }, [searchTerm, searchType, projectsData]);

  const handleSearch = () => {
    // Implement your search logic here (if needed)
  };

  const displayProjectDetails = (project) => {
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
          <option value="EA">Capacite Fo</option>
          <option value="extraDocs">Extra Docs</option>
          <option value="NumDa">Num Da</option>
          <option value="Metro">Metro</option>
        </select>
        <button style={buttonStyle} onClick={handleSearch}>Search</button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Intitule De Projet</th>
            <th style={tableHeaderStyle}>EXT A</th>
            <th style={tableHeaderStyle}>EXT B</th>
            <th style={tableHeaderStyle}>Etat Avancement</th>
            <th style={tableHeaderStyle}>Num Da</th>
            <th style={tableHeaderStyle}>Metro</th>
            <th style={tableHeaderStyle}>IP Client</th>
            <th style={tableHeaderStyle}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(project => (
            <tr key={project.id} style={tableRowStyle} onClick={() => displayProjectDetails(project)}>
              <td style={tableCellStyle}>{project.id}</td>
              <td style={tableCellStyle}>{project.title}</td>
              <td style={tableCellStyle}>{project.extA}</td>
              <td style={tableCellStyle}>{project.extB}</td>
              <td style={tableCellStyle}>{project.EA}</td>
              <td style={tableCellStyle}>{project.NumDa}</td>
              <td style={tableCellStyle}>{project.Metro}</td>
              <td style={tableCellStyle}>{project.ipClient}</td>
              <td style={tableCellStyle}>{project.enterprise.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProject && (
      <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="modal p-6 bg-white rounded-lg shadow-md relative">
        <button className="close-btn absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out" onClick={closeModal}>Close</button>
        <p><span className="font-bold">ID:</span> {selectedProject.id}</p>
        <p><span className="font-bold">Title:</span> {selectedProject.title}</p>
        <p><span className="font-bold">EXT A:</span> {selectedProject.extA}</p>
        <p><span className="font-bold">EXT B:</span> {selectedProject.extB}</p>
        <p><span className="font-bold">EA:</span> {selectedProject.EA}</p>
        <p><span className="font-bold">Num Da:</span> {selectedProject.NumDa}</p>
        <p><span className="font-bold">Metro:</span> {selectedProject.Metro}</p>
        <p><span className="font-bold">IP Client:</span> {selectedProject.ipClient}</p>
        <p><span className="font-bold">Enterprise Name:</span> {selectedProject.enterprise.name}</p>
        <p><span className="font-bold">Enterprise ID:</span> {selectedProject.enterprise.id}</p>
        <p><span className="font-bold">Enterprise Email:</span> {selectedProject.enterprise.email}</p>
        <p><span className="font-bold">Enterprise Phone Number:</span> {selectedProject.enterprise.phoneNumber}</p>
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
  cursor: 'pointer', // Add cursor pointer to indicate clickable rows
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


export default DisplayCreatedProjectsServiceET_Normal;
