import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCredits } from "../../api";
import CastList from "../CastList/CastList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const MovieCast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [casts, setCasts] = useState([]);
  const hasCasts = casts.length > 0;

  useEffect(() => {
    if (movieId) {
      getMovieCredits(movieId)
        .then((data) => {
          const { cast } = data;
          setCasts(cast);
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

  return hasCasts ? (
    <CastList list={casts} />
  ) : (
    <Message>We do not have any information for this movie.</Message>
  );
};

export default MovieCast;
