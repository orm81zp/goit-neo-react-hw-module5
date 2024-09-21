import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../api";

const useMovieReviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const hasData = useMemo(() => data.length > 0, [data]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setData(results);
      } catch (error) {
        setError(error.message || "Oops, try again later...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return { error, loading, data, hasData };
};

export default useMovieReviews;
