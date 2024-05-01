'use client'
import React, { useState } from 'react';
import Employerdata from '@/components/Employerdata';
import DisplayCreatedProjectsServiceET_Normal from './DisplayProjectsServiceET_Normal'


function SearchETNormal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-blue-200 flex flex-col">
      {/* First div */}
      <div className="p-4">
        <Employerdata />
      </div>

      {/* Second div */}
      <div className="p-4 bg-blue-200 flex-1">
        <DisplayCreatedProjectsServiceET_Normal />
      </div>

      

      {/* Add button */}
     
    </div>
  );
}

export default SearchETNormal;
