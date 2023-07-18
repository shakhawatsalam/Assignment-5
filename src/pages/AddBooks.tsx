/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm } from "react-hook-form";
import { Book } from "../Types/globaltypes";

export default function AddBooks() {
  const { register, handleSubmit, reset } = useForm<Book>();

  const onSubmit = (data: Book) => {
    const EditedBook = {
      
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationDate: data.publicationDate,
      image: data.image,
      details: data.details,
    };
    // updateProduct({ id: EditedBook?.id, data: EditedBook });
    reset();
    console.log(EditedBook);
  };
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='border flex items-center justify-center h-[100vh] flex-col'>
          <h1 className='text-5xl mb-3'>Add New Book</h1>
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
                  required
                  placeholder='Book Title'
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
                  required
                  type='text'
                  placeholder='Book Author'
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
                  required
                  type='text'
                  placeholder='Book Genre'
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
                  required
                  type='text'
                  placeholder='Book publication date'
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
                  required
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
                  required
                  type='text'
                  placeholder='Type Details here'
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
            </div>
            <div className='flex justify-center mt-5'>
              <button type='submit' className='btn btn-info'>
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
