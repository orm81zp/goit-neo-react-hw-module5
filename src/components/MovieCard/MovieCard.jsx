import css from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    overview,
    status,
    vote_average,
    genres,
  } = movie;

  const year = release_date ? ` (${release_date.split("-")[0]})` : "";
  const genresList = genres.map(({ name }) => name).join(" ");
  const fullTitle = `${title}${year}`;

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          width="250"
          alt={title}
        />
      </div>
      <div className={css.content}>
        <h3 className={css.title}>
          {fullTitle}
          {status && <span className={css.status}>{status}</span>}
        </h3>
        <p>Vote average: {vote_average}</p>
        <h4 className={css.subtitle}>Overview</h4>
        <p>{overview}</p>
        <h4 className={css.subtitle}>Genres</h4>
        <p>{genresList}</p>
      </div>
    </div>
  );
};

export default MovieCard;
