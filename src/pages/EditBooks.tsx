
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";

export default function EditBooks() {
   const { id } = useParams();

   const { data } = useGetSingleBookQuery(id);

   const book = data?.data;
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto'>
        <div className='border flex items-center justify-center h-[100vh] flex-col'>
          <h1 className='text-5xl mb-3'>Edit Book</h1>
          <form className='w-[700px]'>
            <div className='flex justify-between'>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Author</span>
                </label>
                <input
                  type='text'
                  placeholder='Type here'
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
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Publication Date</span>
                </label>
                <input
                  type='text'
                  placeholder='Type here'
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
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                />
              </div>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Details</span>
                </label>
                <input
                  type='text'
                  placeholder='Type here'
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
