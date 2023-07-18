/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */



/* eslint-disable @typescript-eslint/restrict-plus-operands */

export default function AllBookRow({
  book,
  index,
  setDeletingOrder,
}: {
  book: any;
  index: any;
  setDeletingOrder: any;
}) {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{book?.title}</td>
      <td>{book?.author}</td>
      <td>{book?.genre}</td>
      <td>
        <label
          onClick={() => setDeletingOrder(book)}
          htmlFor='delete-comfirm-modal'
          className='btn btn-xs btn-error'>
          DELETE
        </label>
      </td>
    </tr>
  );
}
