import styles from '../todo.module.css'
import TodoItem from './TodoItem'
import TodoInfo from './TodoInfo'
import MobileFilterButton from './MobileFilterButton'

function TodoList() {
     return(
        <div className={styles.list_container}>
        <ul className={styles.todo_list}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>
        <TodoInfo/>
        <MobileFilterButton/>
        </div>
     )
}


export default TodoList