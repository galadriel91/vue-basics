import { useItem } from '@/store/itemStore';
import { useCommon } from '@/store/commonStore';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const getItem = () => async () => {
    const item = useItem();
    const common = useCommon();

    const { ON_LOADING } = common;
    const { GET_NOTE } = item;
    ON_LOADING();
    await GET_NOTE();
};

const getDetail = () => async (to: RouteLocationNormalizedLoaded) => {
    const item = useItem();
    const common = useCommon();

    const { ON_LOADING } = common;
    const { GET_DETAIL_NOTE } = item;
    ON_LOADING();
    await GET_DETAIL_NOTE(to.params.id as string, to.meta.title as string);
};

export { getDetail, getItem };
