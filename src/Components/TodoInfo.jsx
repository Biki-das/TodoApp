import { useContext } from "react";
import styles from "../todo.module.css";
import { ThemeContext, TodoContext, FilterContext, todoFilters } from "../App";
import TodoFilters from "./TodoFilter";
import { FilterType } from "../App";

function TodoInfo() {
  const themeValue = useContext(ThemeContext);
  const { todos,setTodos } = useContext(TodoContext);
  const { currFilter } = useContext(FilterContext);

  function deleteCompleteTodos() {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <div
      className={`${styles.todo_info}  ${
        themeValue ? styles.todo_info_darkbg : styles.todo_info_lightbg
      } `}
    >
      {currFilter === "All" && (
        <p
          className={`${styles.todo_item_count_text} ${
            themeValue
              ? styles.todo_item_count_text_dark
              : styles.todo_item_count_text_light
          }`}
        >
          {todos.filter(todoFilters["Active"]).length}{" "}
          {todos.filter(todoFilters["Active"]).length > 1 ? "items" : "item"}{" "}
          left
        </p>
      )}
      {currFilter === "Active" && (
        <p
          className={`${styles.todo_item_count_text} ${
            themeValue
              ? styles.todo_item_count_text_dark
              : styles.todo_item_count_text_light
          }`}
        >
          {todos.filter(todoFilters["Active"]).length}{" "}
          {todos.filter(todoFilters["Active"]).length > 1 ? "items" : "item"}{" "}
          left
        </p>
      )}
      {currFilter === "Completed" && (
        <p
          className={`${styles.todo_item_count_text} ${
            themeValue
              ? styles.todo_item_count_text_dark
              : styles.todo_item_count_text_light
          }`}
        >
          {todos.filter(todoFilters["Completed"]).length}{" "}
          {todos.filter(todoFilters["Completed"]).length > 1 ? "items" : "item"}{" "}
          left
        </p>
      )}
      <div className={styles.action_btn_container}>
        {FilterType.map((type) => {
          return <TodoFilters key={type} type={type} themeValue={themeValue} />;
        })}
      </div>
      <button
        onClick={() => {deleteCompleteTodos()}}
        className={`${styles.delete_action_btn} ${
          themeValue ? styles.btn_dark : styles.btn_light
        } ${themeValue ? styles.dark : styles.light}`}
      >
        Clear completed
      </button>
    </div>
  );
}

export default TodoInfo;
