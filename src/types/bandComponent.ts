import { Classification } from './bandData';

export interface BandDataProps {
  bandData: {
    _embedded: {
      attractions: {
        name: string;
        locale: string;
        images: { url: string }[];
        classifications: Classification[];
        externalLinks: {
          twitter: { url: string }[];
          facebook: { url: string }[];
          instagram: { url: string }[];
          itunes: { url: string }[];
          spotify: { url: string }[];
          youtube: { url: string }[];
        };
      }[];
    };
  };
}
