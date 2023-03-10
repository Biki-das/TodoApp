import {useContext} from 'react'
import styles from '../todo.module.css'
import TodoItem from './TodoItem'
import TodoInfo from './TodoInfo'
import {TodoContext} from '../App'
import MobileFilterButton from './MobileFilterButton'

function TodoList() {
    const {todos} = useContext(TodoContext)
     return(
        <div className={styles.list_container}>
        <ul className={styles.todo_list}>
            {todos.map(({todo,completed,id}) => {
                return(<TodoItem key={id} todo={todo} completed={completed} id={id}/>)
            })}
        </ul>
        <TodoInfo/>
        <MobileFilterButton/>
        </div>
     )
}


export default TodoList