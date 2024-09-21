import useMovieCredits from "../../hooks/useMovieCredits";
import CastList from "../CastList/CastList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const MovieCast = () => {
  const { loading, error, data, hasData } = useMovieCredits();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return hasData ? (
    <CastList list={data} />
  ) : (
    <Message>We do not have this information for the movie.</Message>
  );
};

export default MovieCast;
