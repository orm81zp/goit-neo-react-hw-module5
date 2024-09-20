import { Link } from "react-router-dom";
import css from "./GoBack.module.css";

const GoBack = ({ to }) => {
  return (
    <div className={css.wrapper}>
      <Link to={to}>Go back</Link>
    </div>
  );
};

export default GoBack;
