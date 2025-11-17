import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Username from "../features/user/Username";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Read ?query from current URL
  const urlParams = new URLSearchParams(location.search);
  const initialQuery = urlParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  // IMPORTANT FIX:
  // Update query ONLY when on /browse (not /menu)
  useEffect(() => {
    if (location.pathname === "/browse") {
      const params = new URLSearchParams();
      if (query) params.set("query", query);

      navigate(
        { pathname: "/browse", search: params.toString() },
        { replace: true }
      );
    }
  }, [query, location.pathname, navigate]);

  const isBrowsePage = location.pathname === "/browse";

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between border-b border-stone-200 bg-indigo-600 px-4 py-3 sm:px-6 text-white">
      <Link
        to="/"
        className="tracking-wide text-2xl font-semibold mb-2 sm:mb-0 hover:text-indigo-200 transition-colors"
      >
        📚 BookShelf
      </Link>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        {isBrowsePage && (
          <input
            type="text"
            placeholder="Search title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-1.5 rounded border border-indigo-300 w-full sm:w-64 text-stone-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        )}
        <Username />
      </div>
    </header>
  );
}

export default Header;
