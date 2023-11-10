import React from 'react';
import Image from 'next/image';
import { GalleryProps } from 'types/gallery';

const Gallery = ({ attractions }: GalleryProps) => {
  return (
    <div>
      {attractions.map((attraction, attractionIndex) => (
        <div key={attractionIndex} className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Galeria de Imagens {attractionIndex + 1}
          </h2>
          <div className="grid grid-cols-8 gap-1">
            {attraction.images.map((image, imageIndex) => (
              <Image
                key={imageIndex}
                className="w-[38px]  h-[38px] object-cover rounded-lg"
                width={38}
                height={38}
                src={image.url}
                alt={`Image ${imageIndex + 1} of Gallery ${
                  attractionIndex + 1
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
