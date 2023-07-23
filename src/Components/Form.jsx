import style from "../todo.module.css";
import { useContext, useState, useEffect,useRef } from "react";
import { ThemeContext,FilterContext } from "../App";

const Form = ({ getTodos }) => {
  const themeValue = useContext(ThemeContext);
  const { setCurrFilter} = useContext(FilterContext)
  const [inpValue, setInpValue] = useState("");
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  },[])

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
    setCurrFilter("All")
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
          ref={inputRef}
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
