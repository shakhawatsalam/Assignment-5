

export const ProductReview = ({id}) => {
  return (
    <div className='max-w-7xl mx-auto mt-5'>
      <form className='flex gap-5 items-center'>
        {/* <Textarea
          className='min-h-[30px]'
         
          value={inputValue}
        /> */}
        <button
          type='button'
          className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
          Button
        </button>
      </form>
      {/* <div className='mt-10'>
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className='flex gap-3 items-center mb-5'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
