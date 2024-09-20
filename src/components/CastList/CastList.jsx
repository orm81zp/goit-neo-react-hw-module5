import css from "./CastList.module.css";

const sortCast = (a, b) => {
  if (!a.profile_path) {
    return 1;
  }
  if (!b.profile_path) {
    return -1;
  }

  return 0;
};

const CastList = ({ list }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {list.sort(sortCast).map(({ id, name, character, profile_path }) => (
          <li key={id} className={css.listItem}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            )}
            <div className={css.footer}>
              <span className={css.name}>{name}</span>
              {character && <span>Character: {character}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
