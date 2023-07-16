/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Book } from "../Types/globaltypes";
import CartSingle from "./CartSingle";
import { useGetBooksQuery } from "../redux/api/apiSlice";

export default function BookCard() {
  const { data } = useGetBooksQuery(undefined);
  const books = data?.data;

  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='flex items-center justify-around mb-5'>
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
          {books?.map((book: Book) => (
            <CartSingle key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
