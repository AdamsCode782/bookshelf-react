
function Modal({ isOpen, onClose, book }) {
  if (!isOpen || !book) return null;

  const { title, authors = [], description, imageUrl, previewLink } = book;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // closes when clicking overlay
    >
      <div
        className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-32 h-auto rounded-md shadow-sm"
            />
          )}
          <h2 className="text-xl font-bold text-center">{title}</h2>
          {authors.length > 0 && (
            <p className="text-sm text-stone-500 italic">{authors.join(", ")}</p>
          )}
          {description && (
            <p className="text-sm text-stone-400 mt-2 line-clamp-6 text-center">
              {description}
            </p>
          )}
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View on Google Books
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
