import { useContext } from "react";
import styles from "../todo.module.css";
import { FilterContext } from "../App";

function TodoFilters({ type, themeValue }) {
  const { currFilter,setCurrFilter } = useContext(FilterContext);

  return (
    <button
      onClick={() => setCurrFilter(type)}
      className={`${styles.action_btn} ${
        themeValue ? styles.btn_dark : styles.btn_light
      } ${currFilter !== type && (themeValue ? styles.dark : styles.light)} ${currFilter === type && styles.action_btn_active} `}
    >
      {type}
    </button>
  );
}

export default TodoFilters;
