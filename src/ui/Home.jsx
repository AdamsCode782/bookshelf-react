import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-12 px-4 text-center sm:my-20">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl text-stone-800">
        Welcome to <span className="text-indigo-600">BookShelf</span>
      </h1>
      <p className="max-w-2xl mx-auto text-stone-600 mb-10 text-lg">
        Discover new reads, explore your favorite authors, and create a personal
        reading list that stays with you. Search for books using the Google Books API, 
        add them to your list, and track your reading progress — all in one place.
      </p>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/browse" type="primary">
          Start exploring, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
