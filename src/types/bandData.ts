export interface BandDataProps {
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
}

export interface Classification {
  primary: boolean;
  segment: {
    id: string;
    name: string;
  };
  genre: {
    id: string;
    name: string;
  };
  subGenre: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
  subType: {
    id: string;
    name: string;
  };
}
