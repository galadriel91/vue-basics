export const useDate = item => {
    const date = new Date(item.date);
    const daysArray = ['일', '월', '화', '수', '목', '금', '토'];
    const year = date.getFullYear();
    const month =
        date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const days = daysArray[date.getDay()];
    const result = `${year}-${month}-${day} (${days})`;
    return result;
};
