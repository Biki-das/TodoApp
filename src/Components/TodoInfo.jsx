import {useContext} from 'react'
import styles from '../todo.module.css'
import {ThemeContext} from '../App'
import TodoFilters from './TodoFilter'
import {FilterType} from '../App'

function TodoInfo() {
  
  const themeValue = useContext(ThemeContext)

  return(
   <div className={`${styles.todo_info}  ${themeValue ? styles.todo_info_darkbg : styles.todo_info_lightbg  } `}>
    <p className={`${styles.todo_item_count_text} ${themeValue ? styles.todo_item_count_text_dark : styles.todo_item_count_text_light}`}>5 items left</p>
    <div className={styles.action_btn_container}>
     {FilterType.map((type) => {
      return (<TodoFilters type={type} themeValue={themeValue}/>)
     })}
     </div>
     <button className={`${styles.delete_action_btn} ${themeValue ? styles.btn_dark : styles.btn_light} ${themeValue ? styles.dark : styles.light }`}>Clear completed</button>
   </div>
  )
}


export default TodoInfo