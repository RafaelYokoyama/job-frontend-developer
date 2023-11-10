import { VideoProps } from 'types/video';

export const videoThumbnail: VideoProps = {
  id: {
    kind: 'youtube#video',
    videoId: 'abc123',
  },
  snippet: {
    title: 'Sample Video Title',
    thumbnails: {
      medium: {
        url: 'https://example.com/sample_thumbnail.jpg',
      },
    },
    description: 'This is a sample video description.',
  },
  statistics: {
    viewCount: '1000',
    likeCount: '500',
    dislikeCount: '20',
    favoriteCount: '250',
    commentCount: '80',
  },
};
