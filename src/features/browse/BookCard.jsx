import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "../readinglist/DeleteItem";
import { addItem } from "../readinglist/readingListSlice";

function BookCard({ book, onView }) {
  const dispatch = useDispatch();
  const { id, name, authors = [], description, imageUrl, previewLink, unitPrice } = book;

  const readingList = useSelector((state) => state.readingList.list || []);
  const isInList = readingList.some((item) => item.id === id);

  function handleAddToList() {
    const newItem = { id, name, authors, description, imageUrl, previewLink, unitPrice };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className="h-40 w-28 flex-shrink-0 rounded-md object-cover shadow-sm"
      />
      <div className="flex grow flex-col">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-medium text-lg">{name}</p>
            {authors.length > 0 && (
              <p className="text-sm text-stone-500 italic mt-1">
                {authors.join(", ")}
              </p>
            )}
            {description && (
              <p className="text-sm text-stone-400 mt-2 line-clamp-3">
                {description}
              </p>
            )}
          </div>
          <div className="ml-4 text-right">
            <p className="text-sm text-stone-500">Price</p>
            <p className="font-medium mt-1">${unitPrice?.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-3">
          {!isInList && (
            <>
              <Button type="small" onClick={handleAddToList}>
                Add to Reading List
              </Button>
              <Button type="small" onClick={() => onView(book)}>
                View
              </Button>
            </>
          )}
          {isInList && (
            <>
              <DeleteItem bookId={id} />
              <Button type="small" onClick={() => onView(book)}>
                View
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default BookCard;
