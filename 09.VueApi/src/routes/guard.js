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

export const getParamsNote = () => (to, from, next) => {
    const store = useStore();
    const { getEditNote } = store;
    getEditNote(to.params.id)
        .then(() => {
            next();
        })
        .catch(() => {
            next('/404');
        });
};
