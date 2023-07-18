/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
export default function WishlistRow({
  book,
  index,
}: {
  book: any;
  index: number;
}) {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{book?.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
    </tr>
  );
}
