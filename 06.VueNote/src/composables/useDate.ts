import { computed } from 'vue';
import { useRoute } from 'vue-router';

export const useDate = (noteDate: any) => {
    // 타입정의를 해줘야함
    const route = useRoute();
    const date = new Date(noteDate);
    const daysArray = ['일', '월', '화', '수', '목', '금', '토'];
    const year = date.getFullYear();
    const month =
        date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const days = daysArray[date.getDay()];
    const hours =
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    const mainDate = computed(() => {
        if (route.name === 'main') {
            return `${year}-${month}-${day} (${days})`;
        } else {
            return `${year}-${month}-${day} ${hours}:${minutes} (${days})`;
        }
    });

    return mainDate;
};
