import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "../../api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import ReviewList from "../ReviewList/ReviewList";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const hasReviews = reviews.length > 0;

  useEffect(() => {
    if (movieId) {
      getMovieReviews(movieId)
        .then((data) => {
          const { results } = data;
          setReviews(results);
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

  return hasReviews ? (
    <ReviewList list={reviews} />
  ) : (
    <Message>We do not have any reviews for this movie.</Message>
  );
};

export default MovieReviews;
