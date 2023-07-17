/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Book } from "../Types/globaltypes";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetCommentQuery,
  usePostReviewsMutation,
} from "../redux/api/apiSlice";

interface IProps {
  id: string;
}
export const ProductReview = ({ id }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { data } = useGetCommentQuery(id);
  const reviews = data?.reviews;
  const [postReview, { isLoading, isError, isSuccess }] =
    usePostReviewsMutation();
  console.log(isError);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    console.log(options);

    postReview(options);

    console.log(inputValue);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className='max-w-7xl mx-auto'>
      <form className='flex gap-5 items-center' onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          value={inputValue}
          className='py-3 px-4 block w-full border border-gray-700 rounded-md text-sm mt-10 mb-10'></textarea>

        <button
          type='submit'
          className='inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:focus:ring-offset-gray-800 h-[50px]'>
          Submit
        </button>
      </form>
      <div className='mt-2'>
        {reviews?.map((comment: string, index: number) => (
          <div key={index} className='flex gap-3 items-center mb-5'>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
