import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import useSearchMovie from "../../hooks/useSearchMovie";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [query, setQuery] = useState(searchQuery);
  const { loading, data, error } = useSearchMovie(query);

  const handleSubmit = (value) => {
    setQuery(value);
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <div className={css.content}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <MovieList list={data} />
      </div>
    </div>
  );
};

export default MoviesPage;
