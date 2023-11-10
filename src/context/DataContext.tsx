'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { VideoProps } from 'types/video';
import {
  fetchYoutubeVideoDetails,
  fetchYoutubeVideos,
} from 'services/youtubeApi';
import { fetchTicketmasterData } from 'services/ticketmasterApi';
import { extractVideoId } from 'utils/extractVideoId';
import { BandDataProps } from 'types/bandData';

interface DataContextProps {
  bandData: BandDataProps | null;
  videos: VideoProps[];
  loading: boolean;
  error: string | null;
  fetchVideos: (searchQuery: string) => Promise<void>;
}

const DataContext = createContext<DataContextProps>({
  bandData: null,
  videos: [],
  loading: false,
  error: null,
  fetchVideos: async () => {},
});

export const useDataContext = () => {
  return useContext(DataContext);
};

export function DataProvider({ children }: { children: ReactNode }) {
  const [bandData, setBandData] = useState<BandDataProps | null>(null);
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Novo estado para mensagem de erro

  const fetchVideos = async (searchQuery: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const youtubeKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
      const ticketMasterKey =
        process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY || '';

      const ticketMasterResponse = await fetchTicketmasterData(
        searchQuery,
        ticketMasterKey
      );

      setBandData(ticketMasterResponse.data);

      const searchResponse = await fetchYoutubeVideos(searchQuery, youtubeKey);
      const videoIds: string[] = searchResponse.data.items.map(
        (video: VideoProps) => extractVideoId(video)
      );

      const detailsResponse = await fetchYoutubeVideoDetails(
        videoIds,
        youtubeKey
      );

      const videosWithDetails: VideoProps[] = searchResponse.data.items.map(
        (video: VideoProps, index: number) => {
          return {
            id: video.id.videoId,
            snippet: video.snippet,
            statistics: detailsResponse.data.items[index].statistics,
          };
        }
      );

      setVideos(videosWithDetails);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Erro ao buscar video. Por favor, tente novamente mais tarde.'); // Define a mensagem de erro
      console.error('Erro ao buscar dados:', error);
    }
  };

  const values: DataContextProps = {
    bandData,
    videos,
    loading,
    error,
    fetchVideos,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
