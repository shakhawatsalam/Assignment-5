import { useParams } from "react-router-dom";
import { ProductReview } from "../component/ProductReview";

export default function BookDetails() {
      const { id } = useParams();
  return (
    <>
      <div className='flex max-w-7xl mx-auto items-center border-b border-gray-300'>
        <div className='w-[50%]'>
          <img src='jkj' alt='' />
        </div>
        <div className='w-[50%] space-y-3'>
          <h1 className='text-3xl font-semibold'>Hello World</h1>
          <p className='text-xl'>Rating: 5</p>
          <ul className='space-y-1 text-lg'>
            {/* {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))} */}
          </ul>
          <button>Add To Card</button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
