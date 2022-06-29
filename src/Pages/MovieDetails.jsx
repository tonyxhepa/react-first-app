import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`http://localhost:8000/movies/${params.id}`);
      const data = await result.json();

      setMovie(data);
    };
    getMovie();
  }, []);
  const { id, Poster, Title, Year, Runtime } = movie;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center pt-3">
        <img className="rounded-t-lg" src={Poster} alt={Title} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {Title}
        </h5>

        <span className="mr-4">{Year}</span>
        <span>{Runtime}</span>
      </div>
    </div>
  );
};

export default MovieDetails;
