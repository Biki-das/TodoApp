import styles from '../todo.module.css'
import TodoItem from './TodoItem'

function TodoList() {
     return(
        <ul className={styles.todo_list}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>
     )
}


export default TodoList