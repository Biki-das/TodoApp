import styles from '../todo.module.css' 
import {useContext,useState} from 'react'
import {ThemeContext} from '../App'


function TodoItem() {
    const themeValue = useContext(ThemeContext)
    const [showdeleteBtn,setShowDeleteBtn] = useState(false)


    function showDeleteButton(){
      setShowDeleteBtn(true)
    }

    function hideDeleteButton() {
      setShowDeleteBtn(false)
    }


  return(
    <li onMouseOver={showDeleteButton} onMouseLeave={hideDeleteButton} className={`${themeValue ? styles.todo_dark : styles.todo_light} ${themeValue ? styles.listdarkborder: styles.listlightborder}`}>
      <div className={styles.list_div}>  
     <input className={`${styles.todoCheckBox} ${themeValue ? styles.checkboxdarkborder : styles.checkboxlightborder}`} type="checkbox" name="todo-checkbox" />
     <p className={themeValue ? styles.tododarktext  :styles.todolighttext}>
     Buy some Coffee   
     </p>
     </div> 
     {showdeleteBtn && <button className={styles.delete_btn}>
        <img src="../Assests/Images/icon-cross.svg"/>
     </button>}
    
    </li>
  )
}

export default TodoItem;