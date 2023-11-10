import React from 'react';
import Icon from './Icon';
import { BandSocialLinksProps } from 'types/socialLinks';

const BandSocialLinks = ({ socialLinks }: BandSocialLinksProps) => {
  return (
    <div className=" space-x-1">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className="bg-white inline-flex justify-center items-center text-gray-500 shadow-lg w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm"
          href={link.url}
          target="_blank"
        >
          <Icon name={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default BandSocialLinks;
