import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const ProjectTable = () => {
  const [projects, setProjects] = useState([
    { id: 1, intitule: 'Project 1', type: 'Type A', extA: '', extB: '', chargeSuive: '', ordreCreation: '', status: 'Creer', NumDA: '', RFibre: '' },
  ]);

  const [visible, setVisible] = useState(false); // State to manage create project modal visibility
  const [addModalVisible, setAddModalVisible] = useState(false); // State to manage add project modal visibility
  const [statusModalVisible, setStatusModalVisible] = useState(false); // State to manage status edit modal visibility
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null); // State to store the index of the selected project
  const [selectedStatus, setSelectedStatus] = useState('Creer'); // State to store the selected status

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const openStatusModal = (index) => {
    setSelectedProjectIndex(index);
    setStatusModalVisible(true);
  };

  const handleStatusChange = (status) => {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[selectedProjectIndex].status = status;
      return updatedProjects;
    });
    setStatusModalVisible(false);
  };

  return (
    <div className="mt-6 ml-6 overflow-x-auto relative">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">ID</th>
            <th className="px-4 py-2 bg-gray-200">Intitule</th>
            <th className="px-4 py-2 bg-gray-200">Type</th>
            <th className="px-4 py-2 bg-gray-200">Ext A</th>
            <th className="px-4 py-2 bg-gray-200">Ext B</th>
            <th className="px-4 py-2 bg-gray-200">OC</th>
            <th className="px-4 py-2 bg-gray-200">Charge Suive</th>
            <th className="px-4 py-2 bg-gray-200">Capacite FO</th>
            <th className="px-4 py-2 bg-gray-200">Status</th>
            <th className="px-4 py-2 bg-gray-200">Num DA</th>
            <th className="px-4 py-2 bg-gray-200">Renvoi Fibre</th>
            <th className="px-4 py-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{project.id}</td>
              <td className="border px-4 py-2">{project.intitule}</td>
              <td className="border px-4 py-2">{project.type}</td>
              <td className="border px-4 py-2">{project.extA}</td>
              <td className="border px-4 py-2">{project.extB}</td>
              <td className="border px-4 py-2">{project.oc}</td>
              <td className="border px-4 py-2">{project.chargeSuive}</td>
              <td className="border px-4 py-2">{project.CapaciteFO}</td>
              <td className={`border px-4 py-2 ${getStatusColor(project.status)}`}>
                {project.status}
              </td>
              <td className="border px-4 py-2">{project.NumDA}</td>
              <td className="border px-4 py-2">{project.RFibre}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Project Modal */}
      <Modal
        isOpen={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Add Project Modal"
        portalClassName="modal-portal"
      >
        <div className="flex flex-col items-center justify-center p-8 bg-blue-100">
          {/* Form to add a new project */}
          {/* You can create your form inputs here */}
          <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
          {/* Your form inputs */}
        </div>
      </Modal>

      {/* Status Edit Modal */}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Creer':
      return 'bg-yellow-200';
    case 'En cours':
      return 'bg-orange-200';
    case 'Realiser':
      return 'bg-green-200';
    default:
      return '';
  }
};

export default ProjectTable;
