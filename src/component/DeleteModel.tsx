/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hook";
import { useRemoveBookMutation } from "../redux/api/apiSlice";

export default function DeleteModel({
  deletingOrder,
  setDeletingOrder,
}: {
  deletingOrder: any;
  setDeletingOrder: any;
}) {
  const { user } = useAppSelector((state) => state.user);
  const { _id, ownerEmail } = deletingOrder;
  const [removeBook, { isError, error }] = useRemoveBookMutation();
  console.log(isError, "hhh");
  console.log(error);
  const handleDelete = () => {
    if (ownerEmail !== user.email) {
      toast.error(
        "You are not allowed to DELETE this book you are not the owner of the book"
      );
    } else {
      removeBook(_id);
      setDeletingOrder(null);
      toast.success("Book deleted successfully");
    }
  };

  return (
    <div>
      <input
        type='checkbox'
        id='delete-comfirm-modal'
        className='modal-toggle'
      />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-500'>
            Are you sure you want to delete this Order{" "}
            <span className='text-2xl'></span>
          </h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className='modal-action'>
            <button onClick={() => handleDelete()} className='btn btn-xs'>
              Delete
            </button>
            <label htmlFor='delete-comfirm-modal' className='btn btn-xs'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
