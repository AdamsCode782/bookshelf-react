import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ReadingListFooter() {
  const readingList = useSelector((state) => state.readingList.list || []);
  const totalBooks = readingList.length;

  if (totalBooks === 0) return null;

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-indigo-700 text-indigo-50 px-4 py-3 sm:px-6 flex justify-between items-center text-sm md:text-base shadow-md">
      <span className="font-medium tracking-wide">
        📖 {totalBooks} {totalBooks === 1 ? "book" : "books"} saved
      </span>

      <Link
        to="/reading-list"
        className="text-indigo-200 hover:text-white font-semibold transition-colors"
      >
        Open Reading List →
      </Link>
    </footer>
  );
}

export default ReadingListFooter;
