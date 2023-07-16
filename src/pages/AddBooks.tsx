import NavBar from "../component/NavBar";

export default function AddBooks() {
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto'>
        <div className='border flex items-center justify-center h-[100vh] flex-col'>
          <h1 className='text-5xl mb-3'>Add A New Book</h1>
          <div className='w-[700px]'>
            {/* <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
              />
            </div> */}
            {/* <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Author</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
              />
            </div> */}
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
            <div className="flex justify-center mt-5"> 
              <button type="submit" className='btn btn-info'>Add Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
