import { useEffect, useState } from "react";
import { getTrendingMovie } from "../../api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then((data) => {
        const { results } = data;
        setMovies(results);
      })
      .catch((error) => {
        setError(error.message || "Oops, try again later...");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MovieList list={movies} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default HomePage;
