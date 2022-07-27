import { useStore } from '@/store';

export const getNote = () => (to, from, next) => {
    const store = useStore();
    const { getNote } = store;
    getNote()
        .then(() => {
            next();
        })
        .catch(() => {
            next('/404');
        });
};
