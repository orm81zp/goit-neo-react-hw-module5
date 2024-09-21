import useMovieReviews from "../../hooks/useMovieReviews";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import ReviewList from "../ReviewList/ReviewList";

const MovieReviews = () => {
  const { loading, data, error, hasData } = useMovieReviews();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return hasData ? (
    <ReviewList list={data} />
  ) : (
    <Message>We do not have any reviews for this movie.</Message>
  );
};

export default MovieReviews;
