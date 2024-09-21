import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../api";

const useMovieCredits = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const hasData = useMemo(() => data.length > 0, [data]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCredits(movieId);
        setData(cast);
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

export default useMovieCredits;
