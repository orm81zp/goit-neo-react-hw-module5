import css from "./ReviewList.module.css";

const ReviewList = ({ list }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {list.map(({ author, url, content }) => (
          <li key={author} className={css.listItem}>
            <span className={css.name}>
              <a href={url} target="_blank" rel="nofollow noopener">
                {author}
              </a>
            </span>
            <p className={css.content}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
