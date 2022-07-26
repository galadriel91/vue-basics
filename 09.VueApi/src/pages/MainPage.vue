<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
export default {
    components: {
        NoteItem,
    },
    setup() {
        const store = useStore();
        const { notes } = storeToRefs(store);
        const { getNote } = store;
        onMounted(() => {
            getNote();
        });
        return {
            notes,
        };
    },
};
</script>

<style lang="scss" scoped></style>
