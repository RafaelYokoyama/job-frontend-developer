import React from 'react';
import { DetailsProps } from 'types/details';

const Details = ({ title, description, className }: DetailsProps) => {
  return (
    <div className={`py-6 ${className}`}>
      <h1 className={`font-bold text-xl `}>{title}</h1>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default Details;
