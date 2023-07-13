export function getTodoFromLocalStorage() {
    if(localStorage.getItem("todos") !== null){
        return JSON.parse(localStorage.getItem("todos"))
    }
    return []
}

export function getThemeFromLocalStorage() {
    if(localStorage.getItem("theme") !== null){
       return JSON.parse(localStorage.getItem("theme"))  
    }
    return false
}