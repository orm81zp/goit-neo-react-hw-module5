import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const toastOptions = {
  position: "top-right",
};

const SearchBar = ({ onSubmit }) => {
  const [errorId, setErrorId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.elements.search.value.trim();

    if (errorId) {
      toast.dismiss(errorId);
    }

    if (!search) {
      const toastId = toast.error(
        "Text must be entered to search.",
        toastOptions
      );
      setErrorId(toastId);
      return;
    }

    onSubmit(search);
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.searchField}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search movie"
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBar;
