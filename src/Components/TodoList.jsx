import { useContext } from "react";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "../todo.module.css";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import { TodoContext, FilterContext, todoFilters } from "../App";
import MobileFilterButton from "./MobileFilterButton";

function TodoList() {
  const { todos,setTodos } = useContext(TodoContext);
  const { currFilter } = useContext(FilterContext);
  const [parent, enableAnimations] = useAutoAnimate()


  function handleOnDragEnd(result) {
    if(!result.destination) return
    const newTodos = [...todos]
    const [reorderedTodo] = newTodos.splice(result.source.index, 1)
    newTodos.splice(result.destination.index,0,reorderedTodo)
    setTodos(newTodos)
  }


  return (
    <div className={styles.list_container}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={styles.todo_list}>
          {(provided) => (
            <ul
              className={styles.todo_list}
              {...provided.droppableProps}
              ref={provided.innerRef}
              
            >
              {todos
                .filter(todoFilters[currFilter])
                .map(({ todo, completed, id },index) => {
                  return (
                    <Draggable key={id} draggableId={String(id)} index={index}>
                        {(provided) => {
                            return(<TodoItem
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                innerRef={provided.innerRef}
                                todo={todo}
                                completed={completed}
                                id={id}
                              />)
                        }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <TodoInfo />
      <MobileFilterButton />
    </div>
  );
}

export default TodoList;
