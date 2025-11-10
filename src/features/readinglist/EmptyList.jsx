
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to books</LinkButton>

      <p className="mt-7 font-semibold">
        Your reading list is empty. Start adding books you want to save!
      </p>
    </div>
  );
}

export default EmptyCart;
