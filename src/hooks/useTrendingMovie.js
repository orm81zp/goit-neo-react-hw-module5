import { useEffect, useState } from "react";
import { getTrendingMovie } from "../api";

const useTrendingMovie = (timeWindow = "day") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendingMovie(timeWindow);
        setData(results);
      } catch (error) {
        setError(error.message || "Oops, try again later...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeWindow]);

  return { error, loading, data };
};

export default useTrendingMovie;
