import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, updateStatus, clearReadingList } from "../../features/readinglist/readingListSlice";
import { CSVLink } from "react-csv";

function ReadingList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.readingList.list);

  const headers = [
    { label: "Title", key: "name" },
    { label: "Author(s)", key: "authors" },
    { label: "Publisher", key: "publisher" },
    { label: "Published Date", key: "publishedDate" },
    { label: "Page Count", key: "pageCount" },
    { label: "Status", key: "status" },
    { label: "Preview Link", key: "previewLink" },
  ];

  const csvData = list.map((book) => ({
    ...book,
    authors: book.authors.join(", "),
  }));

  if (!list.length) {
    return (
      <div className="p-6 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Your Reading List</h2>
        <p>No books saved yet. Add some from the menu page!</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Reading List</h2>
        <div className="flex gap-3">
          <CSVLink
            data={csvData}
            headers={headers}
            filename="reading_list.csv"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Export CSV
          </CSVLink>
          <button
            onClick={() => dispatch(clearReadingList())}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Clear All
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border-b">Cover</th>
            <th className="p-2 border-b">Title</th>
            <th className="p-2 border-b">Author(s)</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((book) => (
            <tr key={book.id} className="border-b hover:bg-gray-50">
              <td className="p-2">
                <img
                  src={book.imageUrl}
                  alt={book.name}
                  className="w-16 h-24 object-cover rounded"
                />
              </td>
              <td className="p-2">
                <div className="font-medium">{book.name}</div>
                <div className="text-sm text-gray-500">
                  {book.publisher} ({book.publishedDate})
                </div>
              </td>
              <td className="p-2">{book.authors.join(", ")}</td>
              <td className="p-2">
                <select
                  value={book.status}
                  onChange={(e) =>
                    dispatch(updateStatus({ id: book.id, status: e.target.value }))
                  }
                  className="border rounded px-2 py-1"
                >
                  <option>Want to Read</option>
                  <option>Reading</option>
                  <option>Finished</option>
                </select>
              </td>
              <td className="p-2 text-right">
                <button
                  onClick={() => dispatch(deleteItem(book.id))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">
        {list.length} {list.length === 1 ? "book" : "books"} in your list
      </p>
    </div>
  );
}

export default ReadingList;
