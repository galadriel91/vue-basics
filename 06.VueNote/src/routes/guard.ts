import { useItem } from '@/store/itemStore';
import { useCommon } from '@/store/commonStore';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const getDetail = () => (to: RouteLocationNormalizedLoaded) => {
    const item = useItem();
    const common = useCommon();

    const { ON_LOADING } = common;
    const { GET_DETAIL_NOTE } = item;
    ON_LOADING();
    GET_DETAIL_NOTE(to.params.id as string);
};

export { getDetail };
