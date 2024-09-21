import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api";

const useMovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMovieDetails(movieId);
        setData(response);
      } catch (error) {
        setError(error.message || "Oops, try again later...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return { error, loading, data };
};

export default useMovieDetails;
