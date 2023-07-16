

export const ProductReview = ({id}) => {
  return (
    <div className='max-w-7xl mx-auto mt-5'>
      <form className='flex gap-5 items-center' >
        {/* <Textarea
          className='min-h-[30px]'
         
          value={inputValue}
        /> */}
        {/* <Button
          type='submit'
          className='rounded-full h-10 w-10 p-2 text-[25px]'>
          <FiSend />
        </Button> */}
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
