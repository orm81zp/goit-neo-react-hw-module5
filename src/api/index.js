import axios from "axios";
const { VITE_TMDB_API_READ_ACCESS_TOKEN } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
});

// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${VITE_TMDB_API_READ_ACCESS_TOKEN}`,
// };

export const getTrendingMovie = async (timeWindow = "day") => {
  const response = await axiosInstance.get(`/trending/movie/${timeWindow}`);
  return response.data;
};

export const searchMovie = async (query) => {
  const params = {
    query,
    include_adult: false,
  };
  const response = await axiosInstance.get("/search/movie", { params });
  return response.data;
};

export const getMovieDetails = async (movie_id) => {
  const response = await axiosInstance.get(`/movie/${movie_id}`);
  return response.data;
};

export const getMovieCredits = async (movie_id) => {
  const response = await axiosInstance.get(`/movie/${movie_id}/credits`);
  return response.data;
};

export const getMovieReviews = async (movie_id) => {
  const response = await axiosInstance.get(`/movie/${movie_id}/reviews`);
  return response.data;
};
