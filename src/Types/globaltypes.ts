export type Book = {
  [x: string]: Key | null | undefined;
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
  image: string;
  details: string;
};
