import React, { useState } from 'react';

const ProjectForm = () => {
  const [numDa, setNumDa] = useState('');
  const [metro, setMetro] = useState('');
  const [num, setNum] = useState('');
  const [ipClient, setIpClient] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can add your logic here
    console.log('Form submitted:', { numDa, metro, num, ipClient, status });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="numDa" style={{ display: 'block', marginBottom: '5px' }}>Num DA:</label>
        <input
          type="text"
          id="numDa"
          value={numDa}
          onChange={(e) => setNumDa(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="metro" style={{ display: 'block', marginBottom: '5px' }}>Metro:</label>
        <input
          type="text"
          id="metro"
          value={metro}
          onChange={(e) => setMetro(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="num" style={{ display: 'block', marginBottom: '5px' }}>Num:</label>
        <input
          type="text"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="ipClient" style={{ display: 'block', marginBottom: '5px' }}>IP Client:</label>
        <input
          type="text"
          id="ipClient"
          value={ipClient}
          onChange={(e) => setIpClient(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="status" style={{ display: 'block', marginBottom: '5px' }}>Status:</label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          required
        />
      </div>
      <button type="submit" style={{ width: '100%', padding: '12px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default ProjectForm;
