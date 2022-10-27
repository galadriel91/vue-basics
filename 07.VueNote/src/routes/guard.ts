import { useItem } from '@/store/itemStore';
import { useCommon } from '@/store/commonStore';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export const getPage = () => async (to: RouteLocationNormalizedLoaded) => {
    const common = useCommon();
    const item = useItem();
    // console.log(to);
    const { ON_LOADING } = common;
    const { GET_NOTE } = item;
    // SET_KEYWORD(to.params.keyword as string);
    ON_LOADING();
    await GET_NOTE();
};

export const getDetailNote =
    () => async (to: RouteLocationNormalizedLoaded) => {
        const common = useCommon();
        const item = useItem();
        const { ON_LOADING } = common;
        const { GET_DETAIL_NOTE } = item;
        ON_LOADING();
        await GET_DETAIL_NOTE(to.params.id as string, to.name as string);
    };
