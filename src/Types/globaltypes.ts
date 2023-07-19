export type Book = {
  _id?: string | undefined;
  id?: string | undefined;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string; // Only a single string allowed for 'reviews'.
  image: string;
  details: string;
};
