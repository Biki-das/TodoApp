import { useState } from "react"
import style from  '../todo.module.css'
import {useContext} from 'react'
import {ThemeContext} from '../App'



const Form = () => {
const themeValue = useContext(ThemeContext)


function Circle() {
    return(
        <button className={`${style.circle} ${themeValue ? style.circledark : style.circlelight}`}>
        </button>
    )
}

   return(
    <div>
    <form className={themeValue ? style.dark : style.light}>
        <Circle/>   
        <input className={themeValue ? style.dark : style.light} type="text" placeholder="Create a new todo..." required/>
    </form>
    </div>
   )
}

export default Form