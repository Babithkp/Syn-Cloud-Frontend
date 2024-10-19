import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-[#0f0f0f] rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
