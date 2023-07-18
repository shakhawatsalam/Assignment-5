/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Book } from "../Types/globaltypes";

/* eslint-disable @typescript-eslint/restrict-plus-operands */


export default function AllBookRow({ book, index, setDeletingOrder }) {
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
