import styles from '../todo.module.css'
import {useContext} from 'react'
import {FilterType,ThemeContext} from '../App'




function MobileFilterButton() {
    const themeValue = useContext(ThemeContext)
    return(
        <div className={`${styles.mobile_actionbtn_container} ${themeValue ?  styles.todo_info_darkbg : styles.todo_info_lightbg}`}>
             {FilterType.map((type) => {
                return(
                    <button className={`${styles.action_btn} ${themeValue ? styles.btn_dark  : styles.btn_light} ${themeValue ? styles.dark : styles.light } `}>{type}</button>
                )
             })}
        </div>
    )
}


export default MobileFilterButton;
