import React from 'react';
import { BadgeProps } from 'types/badge';

const Badge = ({ data }: BadgeProps) => {
  return (
    <div>
      {data.map((item, index) => (
        <span
          key={index}
          className={`inline-block mx-1 whitespace-nowrap rounded-[0.27rem] ${item.color} px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700`}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default Badge;
