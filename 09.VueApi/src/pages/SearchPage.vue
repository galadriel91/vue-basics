<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
        <NotePagi :keyword="searchValue" />
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import NotePagi from '@/components/note/NotePagi.vue';
import { useLoading } from '@/composables/useLoading';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
export default {
    components: {
        NoteItem,
        NotePagi,
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const { notes, searchValue } = storeToRefs(store);
        const { setSearchValue } = store;
        const onClickCreate = () => {
            router.push('/create');
        };
        useLoading();
        onBeforeRouteLeave(() => {
            setSearchValue('');
        });
        return {
            notes,
            searchValue,
            onClickCreate,
        };
    },
};
</script>

<style lang="scss" scoped></style>
