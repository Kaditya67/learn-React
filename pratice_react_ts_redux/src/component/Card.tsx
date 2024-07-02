import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, linkUrl }) => {
  return (
    <a href={linkUrl} className="block w-[200px] h-[300px] shadow rounded overflow-hidden hover:shadow-md transition duration-300 transform hover:-translate-y-1 hover:bg-gray-100">
      <div className="relative">
        <img className="w-full h-32 object-cover" src={imageUrl} alt="Card" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-white text-center">
            <p className="text-xs bg-gray-900 bg-opacity-50 px-2 py-1 rounded">{title}</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="font-bold text-sm mb-1">{title}</div>
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
};

export default Card;
