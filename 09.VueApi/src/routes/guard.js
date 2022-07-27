import { useStore } from '@/store';

export const getNote = () => (to, from, next) => {
    const store = useStore();
    const { getNote, onLoading } = store;
    onLoading();
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
    const { getEditNote, onLoading } = store;
    onLoading();
    getEditNote(to.params.id)
        .then(() => {
            next();
        })
        .catch(() => {
            next('/404');
        });
};
