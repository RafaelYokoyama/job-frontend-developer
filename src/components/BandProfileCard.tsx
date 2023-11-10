import React from 'react';
import Gallery from './Gallery';
import Badge from './Badge';
import Details from './Details';
import BandSocialLinks from './BandSocialLinks';
import Image from 'next/image';
import { BandDataProps } from 'types/bandComponent';

const BandComponent = ({ bandData }: BandDataProps) => {
  return (
    <div className="px-3  flex items-center ">
      <div className="bg-white mx-auto max- lg:min-w-[400px] rounded-xl m-4 border shadow-lg shadow-gray-100 overflow-hidden">
        <div className="relative h-36 bg-gray-100">
          {bandData && bandData._embedded.attractions[0].images && (
            <Image
              layout="fill"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={bandData._embedded.attractions[0].images[0].url}
              alt="Cover photo"
            />
          )}
        </div>
        <div className="relative -mt-10 px-4 pb-4">
          <div className="flex justify-between">
            <div>
              {bandData && bandData._embedded.attractions[0].images && (
                <Image
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full border-4 border-white object-cover object-center"
                  src={bandData._embedded.attractions[0].images[0].url}
                  alt="Profile picture"
                />
              )}
            </div>

            <BandSocialLinks
              socialLinks={[
                {
                  url: bandData?._embedded?.attractions[0]?.externalLinks
                    ?.twitter?.[0]?.url,
                  icon: 'Twitter'
                },
                {
                  url: bandData?._embedded?.attractions[0]?.externalLinks
                    ?.facebook?.[0]?.url,
                  icon: 'Facebook'
                },
                {
                  url: bandData?._embedded?.attractions[0]?.externalLinks
                    ?.instagram?.[0]?.url,
                  icon: 'Instagram'
                }
              ]}
            />
          </div>

          <Details
            title={`${bandData._embedded.attractions[0].name}`}
            description={`@${bandData._embedded.attractions[0].name} -  ${bandData._embedded.attractions[0].locale}`}
            className="text-black py-1"
          />

          <Gallery attractions={bandData._embedded.attractions} />
        </div>

        {bandData._embedded.attractions.map(
          (attraction: any, attractionIndex: any) => (
            <div key={attractionIndex} className="my-4 ">
              {attraction.classifications && attraction.classifications && (
                <div className="flex flex-wrap border-b gap-2 items-center justify-center py-1">
                  <Badge
                    data={[
                      {
                        text: attraction.classifications[0]?.genre?.name,
                        color: 'bg-slate-600'
                      },
                      {
                        text: attraction.classifications[0]?.segment.name,
                        color: 'bg-green-400'
                      },
                      {
                        text: attraction.classifications[0]?.subGenre?.name,
                        color: 'bg-red-500'
                      },
                      {
                        text: attraction.classifications[0]?.subType?.name,
                        color: 'bg-yellow-400'
                      }
                    ]}
                  />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BandComponent;
