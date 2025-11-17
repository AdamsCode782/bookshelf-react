import { useLoaderData, useSearchParams } from "react-router-dom";
import { getBooks } from "../../services/googleBooksApi";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import Modal from "../../ui/Modal";

function Browse() {
  const loaderData = useLoaderData() || { books: [], defaultGenre: "fiction" };

  const { books: initialBooks, defaultGenre } = loaderData;
  const [books, setBooks] = useState(initialBooks);
  const [genre, setGenre] = useState(defaultGenre);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      if (searchQuery && searchQuery !== genre) {
        try {
          const result = await getBooks(searchQuery, 20);
          setBooks(result);
          setGenre(searchQuery);
        } catch (err) {
          console.error("Failed to fetch books", err);
        }
      }
    }
    fetchBooks();
  }, [searchQuery, genre]);

  function handleView(book) {
    setSelectedBook(book);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="px-4 py-4">
        <h2 className="text-xl font-semibold mb-3 text-stone-800">
          {searchQuery
            ? `Search results for “${searchQuery}”`
            : `Explore ${genre.charAt(0).toUpperCase() + genre.slice(1)} Books`}
        </h2>
      </div>

      {books.length === 0 ? (
        <p className="px-4 py-4 text-stone-500 italic">
          No books found for “{searchQuery || genre}”. Try a different author or
          title.
        </p>
      ) : (
        <ul className="divide-y divide-stone-200 px-2">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onView={handleView} />
          ))}
        </ul>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
      />
    </>
  );
}

export async function loader() {
  const topics = [
    "science fiction",
    "fantasy",
    "mystery",
    "history",
    "self-help",
    "romance",
    "biography",
    "young adult",
  ];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const books = await getBooks(randomTopic, 20);

  return { books, defaultGenre: randomTopic };
}

export default Browse;
