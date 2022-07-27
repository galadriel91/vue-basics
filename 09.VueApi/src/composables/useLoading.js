import { onMounted } from 'vue';
import { useStore } from '@/store';

export const useLoading = () => {
    const store = useStore();
    const { offLoading } = store;
    onMounted(() => {
        offLoading();
    });
};
