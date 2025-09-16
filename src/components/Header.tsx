import React from 'react';


const UserIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <img src="/logo.png" alt="Logo"  className="w-20 h-20"/>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
             <UserIcon />
          </div>
          <span className="font-semibold text-gray-600">USER2.IHC</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
