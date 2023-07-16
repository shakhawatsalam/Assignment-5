/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import { useForm } from "react-hook-form";
import { Book } from "../Types/globaltypes";

export default function EditBooks() {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<Book>();

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;
  console.log(book);

  const onSubmit = (data: Book) => {
    const EditedBook = {
      title: data.title ? data.title : book.title,
      author: data.author ? data.author : book.author,
      genre: data.genre ? data.genre : book.genre,
      publicationDate: data.publicationDate
        ? data.publicationDate
        : book.publicationDate,
      image: data.image ? data.image : book.image,
      details: data.details ? data.details : book.details,
    };
    console.log(EditedBook);

  };
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto'>
        <div className='border flex items-center justify-center h-[100vh] flex-col'>
          <h1 className='text-5xl mb-3'>Edit Book</h1>
          <form className='w-[700px] ' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between'>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input
                  id='title'
                  {...register("title")}
                  type='text'
                  placeholder={book?.title}
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Author</span>
                </label>
                <input
                  id='author'
                  {...register("author")}
                  type='text'
                  placeholder={book?.author}
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Genre</span>
                </label>
                <input
                  id='genre'
                  {...register("genre")}
                  type='text'
                  placeholder={book?.genre}
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Publication Date</span>
                </label>
                <input
                  id='publicationDate'
                  {...register("publicationDate")}
                  type='text'
                  placeholder={book?.publicationDate}
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Image</span>
                </label>
                <input
                  id='image'
                  {...register("image")}
                  type='text'
                  placeholder='Image Link'
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Details</span>
                </label>
                <input
                  id='details'
                  {...register("details")}
                  type='text'
                  placeholder='Type Details here'
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
            </div>
            <div className='flex justify-center mt-5'>
              <button type='submit' className='btn btn-info'>
                Edit Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
