"use client"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployerSignUp() {
 
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Signup', { replace: true });
  };

  return (
    
      <div className="flex items-center justify-between">
        <button
          onClick={handleClick} // Removed unnecessary curly braces here
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </div>
    
  );
}