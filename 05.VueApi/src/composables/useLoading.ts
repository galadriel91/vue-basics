import { useCommon } from '@/store/commonStore';
import { onMounted } from 'vue';

export const useLoading = () => {
    const common = useCommon();
    const { OFF_LOADING } = common;
    onMounted(() => {
        OFF_LOADING();
    });
};
