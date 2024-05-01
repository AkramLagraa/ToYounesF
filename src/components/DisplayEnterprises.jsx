"use client"
import React, { useState, useEffect } from 'react';

const DisplayCreatedProjects = () => {
  const [projectsData, setProjectsData] = useState([
 { id: 1, type: 'Type 1', title: 'Project 1', extA: 'Value A', extB: 'Value B', capacity: 'Capacity 1', extraDocs: 'Doc 1' },
    { id: 2, type: 'Type 2', title: 'Project 2', extA: 'Value C', extB: 'Value D', capacity: 'Capacity 2', extraDocs: 'Doc 2' },
    { id: 3, type: 'Type 3', title: 'Project 3', extA: 'Value E', extB: 'Value F', capacity: 'Capacity 3', extraDocs: 'Doc 3' },
    { id: 4, type: 'Type 4', title: 'Project 4', extA: 'Value G', extB: 'Value H', capacity: 'Capacity 4', extraDocs: 'Doc 4' },
    { id: 5, type: 'Type 5', title: 'Project 5', extA: 'Value I', extB: 'Value J', capacity: 'Capacity 5', extraDocs: 'Doc 5' },
    { id: 6, type: 'Type 6', title: 'Project 6', extA: 'Value K', extB: 'Value L', capacity: 'Capacity 6', extraDocs: 'Doc 6' },
    { id: 7, type: 'Type 7', title: 'Project 7', extA: 'Value M', extB: 'Value N', capacity: 'Capacity 7', extraDocs: 'Doc 7' },
    { id: 8, type: 'Type 8', title: 'Project 8', extA: 'Value O', extB: 'Value P', capacity: 'Capacity 8', extraDocs: 'Doc 8' },
    { id: 9, type: 'Type 9', title: 'Project 9', extA: 'Value Q', extB: 'Value R', capacity: 'Capacity 9', extraDocs: 'Doc 9' },
    { id: 10, type: 'Type 10', title: 'Project 10', extA: 'Value S', extB: 'Value T', capacity: 'Capacity 10', extraDocs: 'Doc 10' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title'); // Default search type
  const [searchResults, setSearchResults] = useState(projectsData);

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

  const deleteProject = () => {
    // Add your delete logic here
    alert('Delete button clicked');
  };

  const editProject = () => {
    // Add your edit logic here
    alert('Edit button clicked');
  };

  const handleSearch = () => {
    // Implement your search logic here (if needed)
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
            <th style={tableHeaderStyle}>Extra docs</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(project => (
            <tr key={project.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{project.id}</td>
              <td style={tableCellStyle}>{project.type}</td>
              <td style={tableCellStyle}>{project.title}</td>
              <td style={tableCellStyle}>{project.extA}</td>
              <td style={tableCellStyle}>{project.extB}</td>
              <td style={tableCellStyle}>{project.capacity}</td>
              <td style={tableCellStyle}>{project.extraDocs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        {/*<button style={buttonStyle} onClick={editProject}>Add</button>*/}
        <button style={buttonStyle} onClick={deleteProject}>Delete</button>
        <button style={buttonStyle} onClick={editProject}>Edit</button>
        
      </div>
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

export default DisplayCreatedProjects;
