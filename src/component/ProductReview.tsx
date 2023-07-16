
const dummyComments = [
  'Bhalo na',
  'Ki shob ghori egula??',
  'Eta kono product holo ??',
  '200 taka dibo, hobe ??',
];
export const ProductReview = ({ id }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      <form className='flex gap-5 items-center'>
        {/* <Textarea
          className='min-h-[30px]'
         
          value={inputValue}
        /> */}
        <textarea className='py-3 px-4 block w-full border border-gray-700 rounded-md text-sm mt-10 mb-10'></textarea>

        <button
          type='submit'
          className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:focus:ring-offset-gray-800 h-[50px]">
          {/* <FiSend /> */}
          Submit
        </button>
      </form>
      <div className='mt-10'>
        {dummyComments?.map((comment: string, index: number) => (
          <div key={index} className='flex gap-3 items-center mb-5'>
            {/* <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
