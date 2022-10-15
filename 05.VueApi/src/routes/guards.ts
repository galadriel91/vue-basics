import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { useItem } from '@/store/itemStore';
import { useCommon } from '@/store/commonStore';

const getPage = () => async (to: RouteLocationNormalizedLoaded) => {
    const item = useItem();
    const common = useCommon();
    const { FETCH_LIST } = item;
    const { ON_LOADING } = common;
    // ON_LOADING();
    try {
        await FETCH_LIST(to.name as string);
    } catch {
        return { path: '/404' };
    }
};

// const getParamsPage = () => async (to: RouteLocationNormalizedLoaded) => {
//     const item = useItem();
//     const common = useCommon();
//     const { FETCH_USER, FETCH_POST } = item;
//     const { ON_LOADING } = common;
//     ON_LOADING();
//     try {
//         if (to.name === 'user') {
//             await FETCH_USER(to.params.id as string);
//         } else {
//             await FETCH_POST(to.params.id as string);
//         }
//     } catch {
//         return { path: '/404' };
//     }
// };

export { getPage };
