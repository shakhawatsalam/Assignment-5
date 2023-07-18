/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Book } from "../Types/globaltypes";
import CartSingle from "./CartSingle";
import {
  useGetBooksQuery,
} from "../redux/api/apiSlice";
import {

  useState,
} from "react";
import { useForm } from "react-hook-form";


export default function BookCard() {
  const { register, handleSubmit, reset } = useForm();
  const [search, setSearch] = useState<string>("");
  console.log(search)
  const url = `books/?searchTerm=${search}`;
  const { data } = useGetBooksQuery(url);
  const books = data?.data;
  const onSubmit = (data: string | any) => {
    setSearch(data.search);
  };
  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='flex items-center justify-center mb-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id='search'
              {...register("search")}
              type='text'
              placeholder='Search By Title, Genre, Author, Publication date'
              className='input input-bordered input-info w-80  max-w-xs'
            />
            <button
              type='submit'
              className='btn btn-outline btn-info ml-2 mb-1 btn-'>
              Search
            </button>
          </form>
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
