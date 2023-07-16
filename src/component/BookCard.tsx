import { Link } from "react-router-dom";
import { Book } from "../Types/globaltypes";
import { useEffect, useState } from "react";
import CartSingle from "./CartSingle";

export default function BookCard() {
  const [data, setData] = useState<Book[]>([]);
  useEffect(() => {
    fetch("public/data.json")
      .then((res) => res.json())
      .then((data: Book[]) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className="flex items-center justify-around mb-5">
          <button className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'>
            Request demo
          </button>
          <button className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'>
            Request demo
          </button>
          <button className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'>
            Request demo
          </button>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data?.map((book: Book, id) => (
            <CartSingle key={id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
