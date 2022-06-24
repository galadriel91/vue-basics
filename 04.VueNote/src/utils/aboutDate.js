export const defineDate = (value) => {
    const date = new Date(value)
    const daysArray = ['일', '월', '화', '수', '목', '금', '토']
    const year = date.getFullYear()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const days = daysArray[date.getDay()]
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const result = `${year}-${month}-${day} ${hours}:${minutes} (${days})` 
    return result
}