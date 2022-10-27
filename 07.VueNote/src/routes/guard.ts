import { useItem } from '@/store/itemStore';
import { useCommon } from '@/store/commonStore';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export const getPage = () => async (to: RouteLocationNormalizedLoaded) => {
    const common = useCommon();
    const item = useItem();
    console.log(to);
    const { ON_LOADING } = common;
    const { GET_NOTE } = item;
    // SET_KEYWORD(to.params.keyword as string);
    ON_LOADING();
    await GET_NOTE();
};
