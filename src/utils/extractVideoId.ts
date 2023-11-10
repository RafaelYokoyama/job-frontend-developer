import { VideoProps } from 'types/video';

export const extractVideoId = (video: VideoProps): string => {
  return typeof video.id === 'string' ? video.id : video.id.videoId;
};
