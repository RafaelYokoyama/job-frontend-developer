import { AxiosResponse } from 'axios';
import { youtubeApi } from './api';

export const fetchYoutubeVideos = async (
  searchQuery: string,
  youtubeKey: string
): Promise<AxiosResponse> => {
  return youtubeApi.get(
    `/search?part=snippet&maxResults=5&q=${searchQuery}&type=video&key=${youtubeKey}`
  );
};

export const fetchYoutubeVideoDetails = async (
  videoIds: string[],
  youtubeKey: string
): Promise<AxiosResponse> => {
  const videoIdsString = videoIds.join(',');
  return youtubeApi.get(
    `/videos?id=${videoIdsString}&key=${youtubeKey}&part=snippet,contentDetails,statistics,status`
  );
};
