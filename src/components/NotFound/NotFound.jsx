import { Link } from "react-router-dom";

import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Oops! We cannot find that page.</h1>
      <p>
        Why not check out our <Link to="/">Home Page</Link>?
      </p>
    </div>
  );
};

export default NotFound;
