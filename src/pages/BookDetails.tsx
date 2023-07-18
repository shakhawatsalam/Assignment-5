/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate, useParams } from "react-router-dom";
import { ProductReview } from "../component/ProductReview";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import { svg } from "../ui/svg";

export default function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetSingleBookQuery(id);

  const book = data?.data;

  return (
    <>
      {/* <!-- Hero --> */}
      <div>
        <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-32'>
          {/* <!-- Grid --> */}
          <div className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
            <div>
              <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white'>
                {book?.title}
              </h1>
              <p className='mt-3 text-lg text-gray-800 dark:text-gray-400'>
                {book?.details}
              </p>
              <h1 className='text-2xl text-gray-500 mt-4'>
                Author: {book?.author}
              </h1>
              <h1 className='text-2xl text-gray-500 mt-2'>
                Genre: {book?.genre}
              </h1>
              <h1 className='text-2xl text-gray-500 mt-2'>
                Publication Date: {book?.publicationDate}
              </h1>

              {/* <!-- Buttons --> */}
              <div className='mt-7 grid gap-3 w-full sm:inline-flex'>
                {<button
                  onClick={() => navigate(`/editbooks/${book?._id}`)}
                  className='btn btn-info btn-lg'>
                  Edit Book
                </button>}
              </div>
              {/* <!-- End Buttons --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className='relative ml-4'>
              <img
                className='w-full rounded-md'
                src={book?.image}
                alt='Image Description'
              />
              <div className='absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0'></div>

              {/* <!-- SVG--> */}
              <div className='absolute bottom-0 left-0'>{svg}</div>
              {/* <!-- End SVG--> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
          <div className='border-t-2 border-gray-500 w-full h-1 mt-20'></div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
      <ProductReview id={id!} />
    </>
  );
}
