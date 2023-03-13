import styles from "../todo.module.css";
import { useContext, useState} from "react";
import { ThemeContext, TodoContext } from "../App";

function TodoItem({ todo, completed, id, innerRef,...delegated}) {
  const themeValue = useContext(ThemeContext);
  const [showdeleteBtn, setShowDeleteBtn] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);

  function showDeleteButton() {
    setShowDeleteBtn(true);
  }

  function hideDeleteButton() {
    setShowDeleteBtn(false);
  }

  function handleCheckBoxToggle(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }


  return (
    <li
      ref={innerRef}
      {...delegated}
      onMouseOver={showDeleteButton}
      onMouseLeave={hideDeleteButton}
      className={`${themeValue ? styles.todo_dark : styles.todo_light} ${
        themeValue ? styles.listdarkborder : styles.listlightborder
      }`}
    >
      <div className={styles.list_div}>
        <input
          onChange={() => {
            handleCheckBoxToggle(id);
          }}
          className={`${styles.todoCheckBox} ${
            themeValue ? styles.checkboxdarkborder : styles.checkboxlightborder
          }`}
          type="checkbox"
          name="todo-checkbox"
          checked={completed}
        />
        <p
          className={`${
            themeValue ? styles.tododarktext : styles.todolighttext
          } ${completed ? styles.todo_Done : ""} `}
        >
          {todo}
        </p>
      </div>
      {showdeleteBtn && (
        <button
          onClick={() => {
            deleteTodo(id);
          }}
          className={styles.delete_btn}
        >
          <img src="../Assests/Images/icon-cross.svg" />
        </button>
      )}
      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className={styles.mobile_table_delete_btn}
      >
        <img src="../Assests/Images/icon-cross.svg" />
      </button>
    </li>
  );
}

export default TodoItem;
