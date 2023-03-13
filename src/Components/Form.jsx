import style from "../todo.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";

const Form = ({ getTodos }) => {
  const themeValue = useContext(ThemeContext);
  const [inpValue, setInpValue] = useState("");

  function Circle() {
    return (
      <button
        className={`${style.circle} ${
          themeValue ? style.circledark : style.circlelight
        }`}
      ></button>
    );
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    getTodos(inpValue, setInpValue);
  }

  function handleInputEvent(e) {
    setInpValue(e.target.value);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleFormSubmission(e);
        }}
        className={themeValue ? style.dark : style.light}
      >
        <Circle />
        <input
          className={themeValue ? style.dark : style.light}
          type="text"
          placeholder="Create a new todo..."
          required
          onChange={(e) => {
            handleInputEvent(e);
          }}
          value={inpValue}
        />
      </form>
    </div>
  );
};

export default Form;
