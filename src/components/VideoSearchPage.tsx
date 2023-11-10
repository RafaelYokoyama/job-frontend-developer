'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Modal from './Modal';
import VideoStatistics from './VideoStatistics';
import VideoThumbnail from './VideoThumbnail';

import Details from './Details';
import BandComponent from './BandProfileCard';
import { useDataContext } from 'context/DataContext';
import { extractVideoId } from 'utils/extractVideoId';
import LoadingState from './Loading';
import MessageBox from './MessageBox';

const VideoSearchPage = () => {
  const [query, setQuery] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchSubmitted, setSearchSubmitted] = useState<boolean>(false);

  const { bandData, error, videos, fetchVideos } = useDataContext();

  const openModal = (videoId: string) => {
    setModalOpen(true);
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo('');
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetchVideos(query);
      setLoading(false);
      setSearchSubmitted(true);
    } catch (error) {
      setLoading(false);

      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className=" bg-black">
      <div
        className={`p-4 transition-all duration-300 ${
          searchSubmitted
            ? 'h-[100%]'
            : 'flex items-center justify-center h-screen'
        }`}
      >
        <SearchBar
          handleFormSubmit={handleSearch}
          query={query}
          onChange={(e) => setQuery(e.target.value)}
          loading={loading}
        />
      </div>

      {error && (
        <MessageBox type="error" title="Muitas Requisições" message={error} />
      )}

      {loading ? (
        <div className="relative mt-4 bottom-72">
          <LoadingState />
        </div>
      ) : (
        <div className="block lg:flex mx-4">
          <div>
            {bandData &&
              bandData._embedded &&
              bandData._embedded.attractions && (
                <BandComponent bandData={bandData} />
              )}
          </div>

          {searchSubmitted && query && videos.length <= 0 ? (
            <MessageBox
              type="info"
              title="Nenhum vídeo encontrado"
              message="Tente uma nova busca com termos diferentes."
            />
          ) : (
            <div className="max-w-[300px] lg:min-w-[400px]  mx-auto flex-col justify-center mt-4 flex-wrap h-[640px] overflow-y-auto">
              {videos.map((video) => (
                <VideoThumbnail
                  video={video}
                  openModal={openModal}
                  key={
                    typeof video.id === 'string' ? video.id : video.id.videoId
                  }
                >
                  <VideoStatistics
                    statistics={[
                      { name: 'ThumbsUp', value: video.statistics.likeCount },
                      { name: 'Eye', value: video.statistics.viewCount },
                      { name: 'Star', value: video.statistics.favoriteCount },
                      {
                        name: 'MessageSquare',
                        value: video.statistics.commentCount,
                      },
                    ]}
                  />
                  <Details
                    title={video.snippet.title}
                    description={video.snippet.description}
                  />
                </VideoThumbnail>
              ))}
            </div>
          )}
        </div>
      )}

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          selectedVideo={selectedVideo}
          closeModal={closeModal}
        >
          {videos
            .filter((video) => extractVideoId(video) === selectedVideo)
            .map((video) => (
              <Details
                key={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                className="px-6 text-black"
              />
            ))}
        </Modal>
      )}
    </div>
  );
};

export default VideoSearchPage;
