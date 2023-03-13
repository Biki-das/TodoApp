import { useState, useEffect, useRef, createContext } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./index.css";

export const ThemeContext = createContext();
export const TodoContext = createContext();
export const FilterContext = createContext();

export const todoFilters = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

export const FilterType = Object.keys(todoFilters);

function App() {
  const headerRef = useRef(null);
  const [isDarktheme, setisDarkTheme] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currFilter, setCurrFilter] = useState("All");

  useEffect(() => {
    window.document.body.style.background = `${
      isDarktheme ? "hsl(235, 21%, 11%)" : "hsl(236, 33%, 92%)"
    }`;
  }, [isDarktheme]);

  function toggleTheme() {
    setisDarkTheme(!isDarktheme);
  }

  function getTodos(inpValue, setInpValue) {
    const newTodo = {
      todo: inpValue,
      id: Math.random(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInpValue("");
  }

  return (
    <>
      <ThemeContext.Provider value={isDarktheme}>
        <TodoContext.Provider value={{ todos, setTodos }}>
          <FilterContext.Provider value={{ currFilter, setCurrFilter }}>
            <Header
              headerRef={headerRef}
              theme={isDarktheme}
              setTheme={setisDarkTheme}
              toggleTheme={toggleTheme}
            />
            <Form getTodos={getTodos} />
            <TodoList></TodoList>
          </FilterContext.Provider>
        </TodoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
