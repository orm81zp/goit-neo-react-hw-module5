import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import GoBack from "../../components/GoBack/GoBack";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import css from "./MovieDetailsPage.module.css";

// 869291

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId)
        .then((data) => {
          setMovie(data);
        })
        .catch((error) => {
          setError(error.message || "Oops, try again later...");
        })
        .finally(() => setLoading(false));
    }
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div>
      <GoBack to={backLinkHref} />
      {movie && <MovieCard movie={movie} />}
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
    </div>
  );
};

export default MovieDetailsPage;
