/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateSingleBookMutation,
} from "../redux/api/apiSlice";
import { useForm } from "react-hook-form";
import { Book } from "../Types/globaltypes";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hook";

export default function EditBooks() {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<Book>();
  const { user } = useAppSelector((state) => state.user);
  const [updateProduct, { isSuccess, error }] = useUpdateSingleBookMutation();
  if (isSuccess) {
    console.log("success");
  }
  if (error) {
    console.log(error);
  }
  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;

  const onSubmit = (data: Book) => {
    if (book.ownerEmail !== user.email) {
      toast.error(
        "You are not allowed to edit this book you are not the owner of the book"
      );
    } else {
      const EditedBook: Book = {
        id: book?._id,
        title: data.title ? data.title : book.title,
        author: data.author ? data.author : book.author,
        genre: data.genre ? data.genre : book.genre,
        publicationDate: data.publicationDate
          ? data.publicationDate
          : book.publicationDate,
        image: data.image ? data.image : book.image,
        details: data.details ? data.details : book.details,
      };
      updateProduct({ id: EditedBook?.id, data: EditedBook });
      toast.success("edited successfully");
      reset();
      console.log(EditedBook);
    }
  };
  return (
    <>
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
