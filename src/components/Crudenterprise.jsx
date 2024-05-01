import React, { useState } from 'react';
import Modal from 'react-modal';

const CrudEnterprise = () => {
  const [enterprises, setEnterprises] = useState([
    { id: 1, nom: 'Enterprise 1', email: 'enterprise1@example.com', numero: '123456789' },
    // Add more enterprises as needed
  ]);

  const [addModalVisible, setAddModalVisible] = useState(false); // State to manage add enterprise modal visibility
  const [editModalVisible, setEditModalVisible] = useState(false); // State to manage edit enterprise modal visibility
  const [selectedEnterprise, setSelectedEnterprise] = useState(null); // State to store the selected enterprise for editing
  const [editedEnterprise, setEditedEnterprise] = useState({}); // State to store edited enterprise data
  const [newEnterprise, setNewEnterprise] = useState({ nom: '', email: '', numero: '' }); // Define newEnterprise state here

  const handleAddEnterprise = () => {
    // Implement adding new enterprise logic here
    // Make sure to handle the new enterprise data from newEnterprise state
  };

  const handleEditEnterprise = () => {
    // Implement editing enterprise logic here
    // Make sure to handle the edited enterprise data from editedEnterprise state
  };

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const closeAddModal = () => {
    setAddModalVisible(false);
  };

  const openEditModal = (enterprise) => {
    setSelectedEnterprise(enterprise);
    setEditedEnterprise({ ...enterprise }); // Set editedEnterprise state to the data of the selected enterprise
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setSelectedEnterprise(null);
    setEditedEnterprise({}); // Reset edited enterprise data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEnterprise((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewEnterprise((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="mt-6 ml-6 overflow-x-auto relative">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openAddModal}>
        Add Enterprise
      </button>
      <table className="w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">ID</th>
            <th className="px-4 py-2 bg-gray-200">Nom</th>
            <th className="px-4 py-2 bg-gray-200">Email</th>
            <th className="px-4 py-2 bg-gray-200">Numero</th>
            <th className="px-4 py-2 bg-gray-200">Actions</th> {/* Action column */}
          </tr>
        </thead>
        <tbody>
          {enterprises.map((enterprise) => (
            <tr key={enterprise.id}>
              <td className="border px-4 py-2">{enterprise.id}</td>
              <td className="border px-4 py-2">{enterprise.nom}</td>
              <td className="border px-4 py-2">{enterprise.email}</td>
              <td className="border px-4 py-2">{enterprise.numero}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1" onClick={() => openEditModal(enterprise)}>
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Enterprise Modal */}
      <Modal
        isOpen={addModalVisible}
        onRequestClose={closeAddModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Add Enterprise Modal"
      >
        <div className="flex flex-col items-center justify-center p-8 bg-blue-100">
          <h2 className="text-lg font-semibold mb-4">Add Enterprise</h2>
          {/* Form inputs for adding a new enterprise */}
          <input
            type="text"
            name="nom"
            value={newEnterprise.nom}
            onChange={handleAddInputChange}
            placeholder="Nom"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={newEnterprise.email}
            onChange={handleAddInputChange}
            placeholder="Email"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="numero"
            value={newEnterprise.numero}
            onChange={handleAddInputChange}
            placeholder="Numero"
            className="mb-2 p-2 border rounded"
          />
          <div className="flex justify-between w-full">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddEnterprise}>
              Submit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeAddModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Enterprise Modal */}
      <Modal
        isOpen={editModalVisible}
        onRequestClose={closeEditModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Edit Enterprise Modal"
      >
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Edit Enterprise</h2>
          {/* Form inputs prefilled with enterprise data for editing */}
          <input
            type="text"
            name="nom"
            value={editedEnterprise.nom}
            onChange={handleInputChange}
            placeholder="Nom"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={editedEnterprise.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="numero"
            value={editedEnterprise.numero}
            onChange={handleInputChange}
            placeholder="Numero"
            className="mb-2 p-2 border rounded w-full"
          />
          <div className="flex justify-between w-full">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleEditEnterprise}>
              Save
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeEditModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};console.log()

export default CrudEnterprise;
