<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
        <NotePagi :keyword="searchValue" v-if="totalItem > 3" />
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import NotePagi from '@/components/note/NotePagi.vue';
import { useLoading } from '@/composables/useLoading';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';
export default {
    components: {
        NoteItem,
        NotePagi,
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const { notes, searchValue, totalItem } = storeToRefs(store);
        const { setSearchValue, getNote, onLoading } = store;
        const onClickCreate = () => {
            router.push('/create');
        };
        useLoading();
        onBeforeRouteUpdate((to, from, next) => {
            onLoading();
            setSearchValue(to.params.keyword);
            getNote(1, to.params.keyword)
                .then(() => {
                    next();
                })
                .catch(() => {
                    next('/404');
                });
        });
        onBeforeRouteLeave(() => {
            setSearchValue('');
        });
        return {
            notes,
            searchValue,
            onClickCreate,
            totalItem,
        };
    },
};
</script>

<style lang="scss" scoped></style>
