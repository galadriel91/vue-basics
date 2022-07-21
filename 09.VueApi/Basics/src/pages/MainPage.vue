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
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
export default {
    components: {
        NoteItem,
    },
    setup() {
        const store = useStore();
        const { notes } = storeToRefs(store);
        const { onGetItem } = store;
        onMounted(() => {
            onGetItem();
        });
        return {
            notes,
        };
    },
};
</script>

<style lang="scss" scoped></style>
