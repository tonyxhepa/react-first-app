import { useContext } from "react";
import MovieContext from "../Context/MovieContext";

import { Link } from "react-router-dom";

const Header = () => {
  const { searchMoviesHandler } = useContext(MovieContext);
  return (
    <div className="relative flex items-center justify-between mb-8 h-16 bg-yellow-500">
      <div className="flex items-center px-2 lg:px-0">
        <Link to={"/"} className="flex ml-2 text-2xl font-semibold">
          React Movie
        </Link>
        <div className="hidden lg:block lg:ml-2">
          <div className="flex">
            <Link
              to={`/about`}
              className="ml-4 px-3 py-2 rounded-md text-sm leading-5 text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label for="search" className="sr-only">
            Search{" "}
          </label>
          <form methode="get" action="#" className="relative z-50">
            <button
              type="submit"
              id="searchsubmit"
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-yellow-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search"
              onChange={searchMoviesHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
