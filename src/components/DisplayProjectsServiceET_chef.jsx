import React, { useState, useEffect } from 'react';

const DisplayCreatedProjects_chef = () => {
  const [projectsData, setProjectsData] = useState([
    // Your previous project data here
    { id: 1, type: 'Type 1', title: 'Project 1', extA: 'Value A', extB: 'Value B', EA: 'EA 1', NumDa: 1, Metro: 'test', Num: 123, Status: 'Completed', ipClient: 'Client 1' },
    { id: 2, type: 'Type 2', title: 'Project 2', extA: 'Value C', extB: 'Value D', EA: 'EA 2', NumDa: 2, Metro: 'test2', Num: 456, Status: 'In Progress', ipClient: 'Client 2' },
    // Add more projects as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [searchResults, setSearchResults] = useState(projectsData);
  const [editingProject, setEditingProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    NumDa: '',
    Metro: '',
    Num: '',
    ipClient: '',
    Status: '',
    enterprise: 'Enterprise 1', // Default value
  });

  useEffect(() => {
    const filteredProjects = projectsData.filter(project =>
      project[searchType].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProjects);
  }, [searchTerm, searchType, projectsData]);

 

  const editProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
    setFormData({
      NumDa: project.NumDa.toString(),
      Metro: project.Metro,
      Num: project.Num.toString(),
      ipClient: project.ipClient,
      Status: project.Status,
      enterprise: project.enterprise || 'Enterprise 1', // Default value if not set
    });
  };

  const handleSearch = () => {
    // Implement your search logic here (if needed)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedProject = {
      ...editingProject,
      NumDa: parseInt(formData.NumDa),
      Metro: formData.Metro,
      Num: parseInt(formData.Num),
      ipClient: formData.ipClient,
      Status: formData.Status,
      enterprise: formData.enterprise,
    };
    const updatedProjects = projectsData.map(project =>
      project.id === editedProject.id ? editedProject : project
    );
    setProjectsData(updatedProjects);
    setIsModalOpen(false);
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
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(project => (
            <tr key={project.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{project.id}</td>
              <td style={tableCellStyle}>{project.title}</td>
              <td style={tableCellStyle}>{project.extA}</td>
              <td style={tableCellStyle}>{project.extB}</td>
              <td style={tableCellStyle}>{project.EA}</td>
              <td style={tableCellStyle}>{project.NumDa}</td>
              <td style={tableCellStyle}>{project.Metro}</td>
              <td style={tableCellStyle}>{project.ipClient}</td>
              <td style={tableCellStyle}>{project.enterprise}</td>
              <td style={tableCellStyle}>
                <button onClick={() => editProject(project)} style={{...buttonStyle, backgroundColor: '#3498db'}}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white shadow-md rounded-lg p-8 w-96">
            <span className="absolute top-0 right-0 px-3 py-1 text-gray-700 hover:text-black cursor-pointer" onClick={closeModal}>&times;</span>
            <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Num Da:</label>
                <input type="text" name="NumDa" value={formData.NumDa} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Metro:</label>
                <input type="text" name="Metro" value={formData.Metro} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Num:</label>
                <input type="text" name="Num" value={formData.Num} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">IP Client:</label>
                <input type="text" name="ipClient" value={formData.ipClient} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status:</label>
                <input type="text" name="Status" value={formData.Status} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Enterprise:</label>
                <select name="enterprise" value={formData.enterprise} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                  <option value="Enterprise 1">Enterprise 1</option>
                  <option value="Enterprise 2">Enterprise 2</option>
                  <option value="Enterprise 3">Enterprise 3</option>
                </select>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Save</button>
              <button type="button" onClick={closeModal} className="ml-2 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">Close</button>
            </form>
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

export default DisplayCreatedProjects_chef;
