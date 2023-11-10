import { ReactNode } from "react";

export type ThumbnailsProps = {
  medium: {
    url: string;
  };
};

export type StatisticsProps = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

export type VideoIdProps = {
  kind: string;
  videoId: string;
};

export interface SnippetProps  {
  title: string;
  thumbnails: ThumbnailsProps;
  description: string;
};

export interface VideoProps  {
  id: VideoIdProps  ;
  snippet: SnippetProps;
  statistics: StatisticsProps;
};

export interface VideoThumbnailProps  {
  video: VideoProps;
  openModal: (videoId: string) => void
  children: ReactNode;
};
