import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "./readingListSlice";

function UpdateItemQuantity({ bookId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(bookId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(bookId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
