import DeleteItem from "./DeleteItem";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const { bookId, name, totalPrice, imageUrl, previewLink } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between gap-4">
      <img
        src={imageUrl}
        alt={name}
        className="h-20 w-16 flex-shrink-0 rounded-md object-cover shadow-sm"
      />

      <p className="flex-grow font-medium">{name}</p>

      <p className="text-sm font-bold">${totalPrice.toFixed(2)}</p>

      <div className="flex items-center gap-2">
        <Button
          type="small"
          onClick={() => window.open(previewLink, "_blank")}
        >
          View
        </Button>
        <DeleteItem bookId={bookId} />
      </div>
    </li>
  );
}

export default CartItem;

