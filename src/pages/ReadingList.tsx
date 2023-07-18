/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetUserQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hook";
import WishlistRow from "../component/WishlistRow";
import { Link } from "react-router-dom";

export default function ReadingList() {
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetUserQuery(user?.email);
  console.log(data?.data[0]?.wishList);
  const readingList = data?.data[0]?.readingList;
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='overflow-x-auto'>
        <h1 className='text-4xl font-semibold text-center'>Reading List</h1>
        <Link to='/wishlist' className='text-blue-700 text-lg underline'>
          Wish List ➡
        </Link>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {readingList?.map((book: any, index: any) => (
              <WishlistRow
                key={book._id}
                book={book}
                index={index}></WishlistRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
