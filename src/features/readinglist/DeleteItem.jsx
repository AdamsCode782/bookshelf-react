import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./readingListSlice";

function DeleteItem({ bookId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(bookId))}>
      Remove
    </Button>
  );
}

export default DeleteItem;
