/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Book } from "../Types/globaltypes";
import AllBookRow from "../component/AllBookRow";
import DeleteModel from "../component/DeleteModel";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { useState } from "react";

export default function AllBook() {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const url = `books/?searchTerm=`;
  const { data } = useGetBooksQuery(url);
  const books = data?.data;
  console.log(books);
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book: Book, index: number) => (
                <AllBookRow
                  key={book._id}
                  book={book}
                  index={index}
                  setDeletingOrder={setDeletingOrder}></AllBookRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingOrder && (
        <DeleteModel
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}></DeleteModel>
      )}
    </div>
  );
}
