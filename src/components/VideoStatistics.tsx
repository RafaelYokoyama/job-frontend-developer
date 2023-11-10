import React from 'react';
import Icon from './Icon';
import { VideoStatisticsProps } from 'types/videoStatistics';

const VideoStatistics = ({ statistics }: VideoStatisticsProps) => {
  return (
    <div className="mt-4 flex items-center">
      {statistics.map((stat, index) => (
        <p key={index} className="flex items-center pr-4">
          <Icon name={stat.name} className="h-5 w-5 mr-1" />
          {stat.value}
        </p>
      ))}
    </div>
  );
};

export default VideoStatistics;
