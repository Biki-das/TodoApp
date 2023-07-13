import styles from "../todo.module.css";
import { useContext } from "react";
import { FilterType, ThemeContext, FilterContext } from "../App";

function MobileFilterButton() {
  const themeValue = useContext(ThemeContext);
  const { currFilter,setCurrFilter } = useContext(FilterContext);

  return (
    <div
      className={`${styles.mobile_actionbtn_container} ${
        themeValue ? styles.todo_info_darkbg : styles.todo_info_lightbg
      }`}
    >
      {FilterType.map((type) => {
        return (
          <button
            onClick={() => {
              setCurrFilter(type);
            }}
            key={type}
            className={`${styles.action_btn} ${
              themeValue ? styles.btn_dark : styles.btn_light
            } ${themeValue ? styles.dark : styles.light} ${currFilter === type && styles.action_btn_active}`}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}

export default MobileFilterButton;
