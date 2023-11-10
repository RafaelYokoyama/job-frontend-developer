import Image from 'next/image';
import { VideoThumbnailProps } from 'types/video';
import { extractVideoId } from 'utils/extractVideoId';
import Button from './Button';

const VideoThumbnail = ({
  video,
  openModal,
  children
}: VideoThumbnailProps) => {
  const videoId = extractVideoId(video);

  return (
    <div
      data-cy={`video-thumbnail-${videoId}`}
      key={videoId}
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105"
    >
      <div className="relative group">
        <Image
          width={550}
          height={550}
          className="w-full"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="overlay hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white text-xl font-bold">
          <Button
            onClick={() => {
              openModal(videoId);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            text="Play Video"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default VideoThumbnail;
