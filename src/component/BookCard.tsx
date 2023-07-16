import { Link } from "react-router-dom";
import { Book } from "../Types/globaltypes";
import { useEffect, useState } from "react";
import CartSingle from "./CartSingle";

export default function BookCard() {
  const [data, setData] = useState<Book[]>([]);
  useEffect(() => {
    fetch("public/data.json")
      .then((res) => res.json())
      .then((data: Book[]) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data?.map((book: Book, id) => (
            <CartSingle key={id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
