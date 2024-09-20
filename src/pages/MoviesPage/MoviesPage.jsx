import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState(searchQuery);
  const [movies, setMovies] = useState([]);

  const handleSubmit = (value) => {
    setQuery(value);
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);
    searchMovie(query)
      .then((data) => {
        const { results } = data;
        setMovies(results);
      })
      .catch((error) => {
        setError(error.message || "Oops, try again later...");
      })
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <MovieList list={movies} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default MoviesPage;
