import { useEffect, useState } from "react";
import { searchMovie } from "../api";

const useSearchMovie = (query) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const { results } = await searchMovie(query);
        setData(results);
      } catch (error) {
        setError(error.message || "Oops, try again later...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { error, loading, data };
};

export default useSearchMovie;
