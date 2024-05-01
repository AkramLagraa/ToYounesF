import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const DisplayCreatedProjectsAdmin = () => {
  const [projectsData, setProjectsData] = useState([
    { id: 1, type: 'Type 1', title: 'Project 1', extA: 'Value A', extB: 'Value B', capacity: 'Capacity 1', extraDocs: 'Doc 1', ChargeSuive: 'test', oc: null, enterprise: 'test'},
    // Add more project data here...
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title'); // Default search type
  const [searchResults, setSearchResults] = useState(projectsData);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedProject, setEditedProject] = useState(null);

  useEffect(() => {
    // Update searchResults whenever searchTerm or searchType changes
    const filteredProjects = projectsData.filter(project =>
      project[searchType].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProjects);
  }, [searchTerm, searchType, projectsData]);

  const openEditModal = (project) => {
    setEditedProject({ ...project }); // Set the currently edited project
    setEditModalVisible(true);
  };

  const handleSearch = () => {
    // Implement your search logic here (if needed)
  };

  const handleEditProject = () => {
    // Find the index of the edited project in projectsData
    const index = projectsData.findIndex(project => project.id === editedProject.id);
    if (index !== -1) {
      // Update the project data with edited values
      const updatedProjectsData = [...projectsData];
      updatedProjectsData[index] = editedProject;
      setProjectsData(updatedProjectsData);
      setEditModalVisible(false);
    } else {
      console.error('Project not found for editing.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setEditedProject(prevState => ({
      ...prevState,
      oc: file,
    }));
  };

  const handleSubmit = () => {
    // Call your API here to submit the edited project data
    console.log('Edited project data submitted:', editedProject);
    setEditModalVisible(false);
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#3498db', fontSize: '28px' }}>Created Projects</h2>
      <div style={{ marginBottom: '20px' }}>
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
          <option value="capacity">Capacity</option>
          <option value="enterprise">Enterprise</option>
        </select>
        <button onClick={handleSearch} style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #bdc3c7', backgroundColor: '#3498db', color: 'white', marginLeft: '10px', cursor: 'pointer' }}>Search</button>
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
            <th style={tableHeaderStyle}>Enterprise</th>
            <th style={tableHeaderStyle}>OC</th>
            <th style={tableHeaderStyle}>Actions</th>
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
              <td style={tableCellStyle}>{project.enterprise}</td>
              <td style={tableCellStyle}>{project.oc ? project.oc.name : 'No File'}</td>
              <td style={tableCellStyle}>
                <button style={buttonStyle1} onClick={() => openEditModal(project)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Edit Project"
        portalClassName="modal-portal"
        style={{
          content: {
            top: '20%',
            margin: 'auto 400px',
            transform: 'translate(-50%, -50%)',
            width: 'fit-content',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginLeft: '970px',
            marginTop: '-500px'
          },
        }}
      >
        <div className='flex flex-col ml-100'>
          <h2>Edit Project</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="type" className="text-sm font-semibold mb-1">Type De Projet:</label>
            <input type="text" id="type" name="type" value={editedProject ? editedProject.type : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-sm font-semibold mb-1">Intitule De Projet:</label>
            <input type="text" id="title" name="title" value={editedProject ? editedProject.title : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="extA" className="text-sm font-semibold mb-1">EXT A:</label>
            <input type="text" id="extA" name="extA" value={editedProject ? editedProject.extA : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="extB" className="text-sm font-semibold mb-1">EXT B:</label>
            <input type="text" id="extB" name="extB" value={editedProject ? editedProject.extB : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="capacity" className="text-sm font-semibold mb-1">Capacite Fo:</label>
            <input type="text" id="capacity" name="capacity" value={editedProject ? editedProject.capacity : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="enterprise" className="text-sm font-semibold mb-1">Enterprise:</label>
            <select id="enterprise" name="enterprise" value={editedProject ? editedProject.enterprise : ''} onChange={handleInputChange} className="px-4 py-2 border rounded-md mb-2">
              <option value="Enterprise 1">Enterprise 1</option>
              <option value="Enterprise 2">Enterprise 2</option>
              <option value="Enterprise 3">Enterprise 3</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="oc" className="text-sm font-semibold mb-1">OC (PDF):</label>
            <input type="file" id="oc" name="oc" onChange={handleFileUpload} className="px-4 py-2 border rounded-md mb-2" />
          </div>
          <div className="flex">
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Submit</button>
            <button onClick={() => setEditModalVisible(false)} className="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const tableHeaderStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '15px',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
  backgroundColor: 'white'
};

const tableCellStyle = {
  border: '1px solid #ecf0f1',
  padding: '15px',
  backgroundColor: 'white'
};

const buttonStyle1 = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  marginRight: '5px',
  backgroundColor: 'blue',
  color: 'white'
};

export default DisplayCreatedProjectsAdmin;
