import { Link, Outlet, useLocation } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import GoBack from "../../components/GoBack/GoBack";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import useMovieDetails from "../../hooks/useMovieDetails";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { loading, error, data } = useMovieDetails();
  const backLinkHref = location.state ?? "/movies";

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <GoBack to={backLinkHref} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {data && (
        <>
          <MovieCard movie={data} />
          <div className={css.extra}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
            <div>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
