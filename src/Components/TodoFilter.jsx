import styles from '../todo.module.css'


function TodoFilters({type,themeValue}) {
    return(
        <button className={`${styles.action_btn} ${themeValue ? styles.btn_dark  : styles.btn_light} ${themeValue ? styles.dark : styles.light } `}>{type}</button>
    )
}


export default TodoFilters