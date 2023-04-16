import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { itemStore } from '@/store/itemStore';
import { commonStore } from '@/store/commonStore';

const getPage = () => async (to: RouteLocationNormalizedLoaded) => {
    const common = commonStore();
    const item = itemStore();
    const { FETCH_LIST } = item;
    const { ON_LOADING } = common;
    ON_LOADING();
    try {
        await FETCH_LIST(to.name as string);
    } catch {
        return { path: '/404' };
    }
};

export{
    getPage
}