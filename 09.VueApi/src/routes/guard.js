import { useStore } from '@/store';

export const getNote = () => (to, from, next) => {
    const store = useStore();
    const { getNote, onLoading, setSearchValue } = store;
    onLoading();
    setSearchValue(to.params.keyword);
    getNote(1, to.params.keyword)
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
    getEditNote()
        .then(() => {
            next();
        })
        .catch(() => {
            next('/404');
        });
};
