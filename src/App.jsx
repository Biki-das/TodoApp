import {useState,useEffect,useRef,createContext} from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import './index.css'
import TodoItem from './Components/TodoItem'



export const ThemeContext = createContext()
  
function App() {
  
  const headerRef = useRef(null)
  const [isDarktheme,setisDarkTheme] = useState(false)
  const [todos,setTodos] = useState([])

  useEffect(() => {
    window.document.body.style.background = `${isDarktheme ? 'hsl(235, 21%, 11%)' : 'hsl(236, 33%, 92%)'}`
  },[isDarktheme])
  

   function toggleTheme() {
    setisDarkTheme(!isDarktheme)
   }


  return (
    <>
    <ThemeContext.Provider value={isDarktheme}>
    <Header headerRef={headerRef} theme={isDarktheme} setTheme={setisDarkTheme}  toggleTheme={toggleTheme}/>
    <Form/>
    <TodoList>
    </TodoList>
    </ThemeContext.Provider>
    </>
  )
}

export default App
