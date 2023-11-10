export interface BandDataProps {
  bandData: {
    _embedded: {
      attractions: {
        name: string;
        locale: string;
        images: { url: string }[];
        classifications: any;
        externalLinks: {
          twitter: { url: string }[];
          facebook: { url: string }[];
          instagram: { url: string }[];
        };
      }[];
    };
  };
}
