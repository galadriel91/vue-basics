import { commonStore } from '@/store/commonStore';
import { onMounted } from 'vue';

export const useLoading = () => {
    const common = commonStore();
    const { OFF_LOADING } = common;
    onMounted(() => {
        OFF_LOADING();
    });
};
