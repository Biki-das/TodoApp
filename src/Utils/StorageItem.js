export function getTodoFromLocalStorage() {
    if(localStorage.getItem("todos") !== null){
        return JSON.parse(localStorage.getItem("todos"))
    }
    return []
}