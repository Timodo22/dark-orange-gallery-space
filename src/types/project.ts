
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  year: string;
  coverImage: string;
  photos: {
    id: string;
    src: string;
    alt: string;
  }[];
  client: string;
  location: string;
  summary: string;
  details: string;
}
