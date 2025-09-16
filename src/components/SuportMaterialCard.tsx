import React from 'react';

interface SupportMaterialCardProps {
  title: string;
  borderColorClass: string;
}

const SupportMaterialCard: React.FC<SupportMaterialCardProps> = ({ title, borderColorClass }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 border-t-4 ${borderColorClass}`}>
      <div className="p-5">
        <span className="font-semibold text-gray-700">{title}</span>
      </div>
    </div>
  );
};

export default SupportMaterialCard;
