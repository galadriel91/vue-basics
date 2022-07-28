<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import { useLoading } from '@/composables/useLoading';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default {
    components: {
        NoteItem,
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const { notes } = storeToRefs(store);
        const onClickCreate = () => {
            router.push('/create');
        };
        useLoading();
        return {
            notes,
            onClickCreate,
        };
    },
};
</script>

<style lang="scss" scoped></style>
