import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import useTrendingMovie from "../../hooks/useTrendingMovie";

import css from "./HomePage.module.css";

const HomePage = () => {
  const { loading, data, error } = useTrendingMovie();

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading ? <Loader /> : <MovieList list={data} />}
    </div>
  );
};

export default HomePage;
