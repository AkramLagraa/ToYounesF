'use client'
import React, { useState } from 'react';
import Header from "@/components/HeaderA";
import Sidebar from '@/components/Sidebar';
import CrudEmployer from '@/components/CrudEmployers';
import CrudProjects from '@/components/CrudProjects';
import DisplayCreatedProjects from '@/components/DisplayCreatedProjectsChef';
import CrudEnterprise from '@/components/Crudenterprise';
import DisplayCreatedProjectsAdmin from '../../components/DisplayProjectsServiceET_chef'

export default function Home() {
  const [displayComponent, setDisplayComponent] = useState('CrudProjects');

  const handleClick = (component) => {
    setDisplayComponent(component);
  };

  return (
    <main>
      <Header />
      <Sidebar />
      
      {displayComponent === 'CrudProjects' && <CrudProjects />}
      {displayComponent === 'CrudEmployer' && <CrudEmployer />}
      {displayComponent === 'DisplayCreatedProjects' && <DisplayCreatedProjects />}
      {displayComponent === 'displayMain' && <CrudProjects />}
      {displayComponent === 'displayEnterpises' && <CrudEnterprise />}
      {displayComponent === 'displayET' && <DisplayCreatedProjectsAdmin />}

      
      <div className="mt-6 ml-6 overflow-x-auto relative flex">
        <button onClick={() => handleClick('DisplayCreatedProjects')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 mr-2">
          Service FO
        </button>
        <button onClick={() => handleClick('displayET')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 mr-2">
          Service ET
        </button>
        <button onClick={() => handleClick('CrudEmployer')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 mr-2">
          Gestion Des Employers
        </button>
        <button onClick={() => handleClick('displayMain')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 mr-2">
          Main
        </button>
        <button onClick={() => handleClick('displayEnterpises')} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4 mr-2">
          Enterprises
        </button>
      </div>
    </main>
  );
}
