import { useContext } from "react";
import styles from "../todo.module.css";
import { FilterContext } from "../App";

function TodoFilters({ type, themeValue }) {
  const { setCurrFilter } = useContext(FilterContext);

  return (
    <button
      onClick={() => setCurrFilter(type)}
      className={`${styles.action_btn} ${
        themeValue ? styles.btn_dark : styles.btn_light
      } ${themeValue ? styles.dark : styles.light} `}
    >
      {type}
    </button>
  );
}

export default TodoFilters;
