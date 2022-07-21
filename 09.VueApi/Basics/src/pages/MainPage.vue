<template>
    <div>
        <ul v-if="notes.length">
            <NoteItem v-for="note in notes" :key="note.id" :item="note" />
        </ul>
    </div>
</template>

<script>
import NoteItem from '@/components/note/NoteItem.vue';
import { fetchNoteItem } from '@/api';
import { ref } from 'vue';
export default {
    components: {
        NoteItem,
    },
    setup() {
        const notes = ref([]);
        const fetchItem = async () => {
            const { data } = await fetchNoteItem();
            console.log(data);
            notes.value = data;
            return data;
        };
        fetchItem();
        return {
            notes,
        };
    },
};
</script>

<style lang="scss" scoped></style>
