export interface Attraction {
  images: { url: string }[];
}

export interface GalleryProps {
  attractions: Attraction[];
}
