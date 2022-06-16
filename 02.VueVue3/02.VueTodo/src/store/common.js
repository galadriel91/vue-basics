export const saveItem = (item) => {
    localStorage.setItem('todos' , JSON.stringify(item))
}
